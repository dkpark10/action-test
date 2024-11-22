import { Outlet } from 'react-router-dom';
import PrefixLink from './components/prefix-link';

console.log('123');
export default function RootLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <PrefixLink to=''>Home</PrefixLink>
            <PrefixLink to='about'>About</PrefixLink>
            <PrefixLink to='sample'>Sample</PrefixLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
