import { useTranslations } from 'next-intl';

export default function Dock() {
  const t = useTranslations();

  return (
    <>
      <h1 className='text-4xl font-bold'>{t('nav.Dashboard')}</h1>
    </>
  );
}
