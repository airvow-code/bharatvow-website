const CACHE_PREFIX = 'bharatvow.legalDoc.v1:';
const REQUEST_TIMEOUT_MS = 10_000;

export class LegalApiError extends Error {
  /**
   * @param {'config'|'not_found'|'network'|'timeout'} kind
   * @param {string} message
   */
  constructor(kind, message) {
    super(message);
    this.name = 'LegalApiError';
    this.kind = kind;
  }
}

export function getLegalApiBaseUrl() {
  const raw = import.meta.env.VITE_LEGAL_API_BASE_URL;
  if (raw == null || String(raw).trim() === '') return null;
  return String(raw).trim().replace(/\/+$/, '');
}

function cacheKey(documentId) {
  return `${CACHE_PREFIX}${documentId}`;
}

function readCache(documentId) {
  try {
    const raw = sessionStorage.getItem(cacheKey(documentId));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeCache(documentId, entry) {
  try {
    sessionStorage.setItem(cacheKey(documentId), JSON.stringify(entry));
  } catch {
    /* ignore quota */
  }
}

/**
 * GET /v1/legal/document/{documentId}
 * Supports ETag / If-None-Match and a ~10s timeout.
 */
export async function fetchLegalDocument(documentId) {
  const base = getLegalApiBaseUrl();
  if (!base) {
    throw new LegalApiError(
      'config',
      'Legal API base URL is not configured. Set VITE_LEGAL_API_BASE_URL in your environment (for example in .env), then restart the Vite dev server.',
    );
  }

  const cached = readCache(documentId);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const headers = { Accept: 'application/json' };
    if (cached?.etag) {
      headers['If-None-Match'] = cached.etag;
    }

    const res = await fetch(`${base}/v1/legal/document/${encodeURIComponent(documentId)}`, {
      method: 'GET',
      headers,
      signal: controller.signal,
    });

    if (res.status === 304 && cached?.data) {
      return {
        data: cached.data,
        etag: cached.etag ?? null,
        lastModified: cached.lastModified ?? null,
        cacheControl: cached.cacheControl ?? null,
        versionHeader: cached.versionHeader ?? null,
        fromCache: true,
      };
    }

    if (res.status === 404) {
      throw new LegalApiError('not_found', 'Document not available.');
    }

    if (!res.ok) {
      throw new LegalApiError('network', 'Unable to load the document.');
    }

    let json;
    try {
      json = await res.json();
    } catch {
      throw new LegalApiError('network', 'Unable to load the document.');
    }

    if (!json?.success || !json.data) {
      throw new LegalApiError('network', 'Unable to load the document.');
    }

    const etag = res.headers.get('ETag');
    const lastModified = res.headers.get('Last-Modified');
    const cacheControl = res.headers.get('Cache-Control');
    const versionHeader = res.headers.get('X-Legal-Version');

    writeCache(documentId, {
      data: json.data,
      etag,
      lastModified,
      cacheControl,
      versionHeader,
      savedAt: Date.now(),
    });

    return {
      data: json.data,
      etag,
      lastModified,
      cacheControl,
      versionHeader,
      fromCache: false,
    };
  } catch (err) {
    if (err instanceof LegalApiError) throw err;
    if (err?.name === 'AbortError') {
      throw new LegalApiError('timeout', 'Unable to load the document.');
    }
    throw new LegalApiError('network', 'Unable to load the document.');
  } finally {
    clearTimeout(timer);
  }
}
