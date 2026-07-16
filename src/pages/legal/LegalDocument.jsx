import { useLocation, Navigate } from 'react-router-dom';
import { getLegalPageByPath } from '@/data/legal';
import { getApiLegalByPath } from '@/data/legalRegistry';
import useLegalDocument from '@/hooks/useLegalDocument';
import LegalDocumentLayout from '@/layouts/LegalDocumentLayout';

export default function LegalDocument() {
  const { pathname } = useLocation();
  const apiEntry = getApiLegalByPath(pathname);
  const staticPage = getLegalPageByPath(pathname);

  if (apiEntry) {
    return <ApiLegalDocument entry={apiEntry} />;
  }

  if (!staticPage || staticPage.id === 'delete-account') {
    return <Navigate to="/legal" replace />;
  }

  return <LegalDocumentLayout page={staticPage} mode="static" />;
}

function ApiLegalDocument({ entry }) {
  const { status, data, errorKind, errorMessage, retry } = useLegalDocument(entry.documentId);

  const page = {
    id: entry.documentId,
    documentId: entry.documentId,
    title: entry.title,
    description: entry.description,
    path: entry.path,
    lead: entry.lead,
    keywords: entry.keywords,
    seo: entry.seo,
    sections: [],
  };

  return (
    <LegalDocumentLayout
      page={page}
      mode="api"
      apiDoc={data}
      apiStatus={status}
      errorKind={errorKind}
      errorMessage={errorMessage}
      onRetry={retry}
    />
  );
}
