import { Navigate, useParams } from 'react-router-dom';
import { digitalLifePath } from '@/config/paths';

/** Redirect legacy /digital-tools/:slug URLs to /digital-life/:slug */
export default function LegacyDigitalToolRedirect() {
  const { slug } = useParams();
  return <Navigate to={digitalLifePath(slug)} replace />;
}
