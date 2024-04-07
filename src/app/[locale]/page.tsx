import { TLocal } from '@/i18n/locales';
import { createServerClient } from '@/lib/pocketbase';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: {
    locale: TLocal;
  };
};

export default async function Home(props: Props) {
  const t = await getTranslations({ locale: props.params.locale });
  const pb = createServerClient();
  const data = await pb.collection('customers').getFullList({
    expand: 'products',
  });

  console.log(data[0].expand);

  return (
    <>
      <h1 className='text-4xl font-bold'>{t('nav.Home')}</h1>
    </>
  );
}
