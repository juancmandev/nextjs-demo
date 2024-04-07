'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';

export default function NotFound() {
  const t = useTranslations('not_found');

  return (
    <>
      <h1 className='text-2xl font-bold'>{`Error 404: ${t('page')}`}</h1>
      <Button asChild className='mt-5'>
        <Link href='/'>{t('go_to_home')}</Link>
      </Button>
    </>
  );
}
