import { useCallback, useEffect, useState } from 'react';
import { fetchLegalDocument, LegalApiError } from '@/services/legalApi';

/**
 * @param {string|null|undefined} documentId
 */
export default function useLegalDocument(documentId) {
  const [state, setState] = useState({
    status: documentId ? 'loading' : 'idle',
    data: null,
    meta: null,
    errorKind: null,
    errorMessage: null,
  });
  const [reloadToken, setReloadToken] = useState(0);

  const retry = useCallback(() => {
    setReloadToken((n) => n + 1);
  }, []);

  useEffect(() => {
    if (!documentId) {
      setState({
        status: 'idle',
        data: null,
        meta: null,
        errorKind: null,
        errorMessage: null,
      });
      return undefined;
    }

    let cancelled = false;
    setState((prev) => ({
      ...prev,
      status: 'loading',
      errorKind: null,
      errorMessage: null,
    }));

    fetchLegalDocument(documentId)
      .then((result) => {
        if (cancelled) return;
        setState({
          status: 'success',
          data: result.data,
          meta: {
            etag: result.etag,
            lastModified: result.lastModified,
            cacheControl: result.cacheControl,
            versionHeader: result.versionHeader,
            fromCache: result.fromCache,
          },
          errorKind: null,
          errorMessage: null,
        });
      })
      .catch((err) => {
        if (cancelled) return;
        const kind = err instanceof LegalApiError ? err.kind : 'network';
        const message =
          err instanceof LegalApiError ? err.message : 'Unable to load the document.';
        setState({
          status: 'error',
          data: null,
          meta: null,
          errorKind: kind,
          errorMessage: message,
        });
      });

    return () => {
      cancelled = true;
    };
  }, [documentId, reloadToken]);

  return { ...state, retry };
}
