import { useLocation, Navigate } from 'react-router-dom';
import { getLegalPageByPath } from '@/data/legal';
import LegalDocumentLayout from '@/layouts/LegalDocumentLayout';

export default function LegalDocument() {
  const { pathname } = useLocation();
  const page = getLegalPageByPath(pathname);

  if (!page || page.id === 'delete-account') {
    return <Navigate to="/legal" replace />;
  }

  return <LegalDocumentLayout page={page} />;
}
