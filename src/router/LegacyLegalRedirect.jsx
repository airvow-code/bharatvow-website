import { Navigate, useParams } from 'react-router-dom';
import { legacyLegalRedirect } from '@/config/paths';

export default function LegacyLegalRedirect() {
  const { doc } = useParams();
  const target = legacyLegalRedirect(doc);
  return <Navigate to={target} replace />;
}
