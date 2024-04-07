import { Home, Dock, Lamp } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import NavItem from '@/components/nav-item';

const navItems = [
  {
    to: '/',
    label: 'Home',
    icon: <Home className='w-5 h-5' />,
  },
  {
    to: '/dashboard',
    label: 'Dashboard',
    icon: <Dock className='w-5 h-5' />,
  },
  {
    to: '/lamp',
    label: 'Lamp',
    icon: <Lamp className='w-5 h-5' />,
  },
];

export default function Sidebar() {
  return (
    <aside className='fixed z-20 h-screen top-0 left-0 bg-primary text-primary-foreground'>
      <ScrollArea className='h-full py-4 bg-primary'>
        <nav>
          <ul>
            {navItems.map((navItem, index) => (
              <li key={`${navItem.to}-${index}`}>
                <NavItem {...navItem} />
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </aside>
  );
}
