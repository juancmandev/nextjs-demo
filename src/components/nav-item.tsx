import { Link } from '@/navigation';
import { Button } from '@/components/ui/button';

type TNavItem = {
  to: string;
  label: string;
  icon: React.ReactNode;
};

export default function NavItem(props: TNavItem) {
  return (
    <Button asChild variant='ghost' className='w-full rounded-none'>
      <Link href={props.to as any}>{props.icon}</Link>
    </Button>
  );
}
