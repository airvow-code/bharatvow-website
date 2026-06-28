import { Navigate, useParams } from 'react-router-dom';
import { digitalLifePath } from '@/config/paths';

/** Redirect legacy /module/:slug URLs to /digital-life/:slug */
export default function LegacyModuleRedirect() {
  const { slug } = useParams();
  return <Navigate to={digitalLifePath(slug)} replace />;
}
