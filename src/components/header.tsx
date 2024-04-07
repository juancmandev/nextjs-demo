import dynamic from 'next/dynamic';

const ChangeLanguage = dynamic(() => import('@/components/change-language'));

export default function Header() {
  return (
    <header className='flex fixed w-full top-0 z-10 items-center justify-between pl-20 pr-10 py-2 border-b shadow-md bg-background'>
      <h1>Header</h1>
      <ChangeLanguage />
    </header>
  );
}
