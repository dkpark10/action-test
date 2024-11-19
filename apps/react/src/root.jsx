import { Link, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/sample'>Sample</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
