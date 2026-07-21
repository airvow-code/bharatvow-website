import { useParams, Navigate } from 'react-router-dom';
import { getLegalPage } from '@/data/legal';
import LegalDocumentLayout from '@/layouts/LegalDocumentLayout';

export default function LegalPage() {
  const { doc } = useParams();
  const page = getLegalPage(doc);

  if (!page) {
    return <Navigate to="/legal" replace />;
  }

  return <LegalDocumentLayout page={page} mode="static" />;
}
