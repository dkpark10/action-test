import { Link } from 'react-router-dom';

export default function PrefixLink({
  prefix = import.meta.env.BASE_URL || '',
  to,
  children,
}) {
  console.log('123', prefix + to);
  console.log(import.meta.env.BASE_URL);
  return <Link to={prefix + to}>{children}</Link>;
}
