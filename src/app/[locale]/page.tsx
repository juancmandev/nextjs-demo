import { TLocal } from '@/i18n/locales';
import { createServerClient } from '@/lib/pocketbase';
import { getTranslations } from 'next-intl/server';
import CreateCustomerForm from './form';

type Props = {
  params: {
    locale: TLocal;
  };
};

export default async function Home(props: Props) {
  const t = await getTranslations({ locale: props.params.locale });
  const pb = createServerClient();
  const products = await pb.collection('products').getFullList();
  const customers = await pb.collection('customers').getFullList();

  return (
    <>
      <h1 className='text-4xl font-bold'>{t('nav.Home')}</h1>

      <CreateCustomerForm products={products} />

      <h2 className='text-xl font-semibold mt-10 mb-5'>{t('customers')}</h2>
      <ul className='space-y-2'>
        {customers ? (
          customers.map((customer) => (
            <li key={customer.id}>
              <h3 className='text-lg font-semibold'>{customer.name}</h3>
              <p>{customer.email}</p>
            </li>
          ))
        ) : (
          <p>{t('no_customers')}</p>
        )}
      </ul>
    </>
  );
}
