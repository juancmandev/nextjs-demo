'use server';

import { createServerClient } from '@/lib/pocketbase';

type Values = {
  name: string;
  email: string;
  products: string;
};

export async function createCustomer(values: Values) {
  try {
    const pb = createServerClient();
    const data = {
      name: values.name,
      email: values.email,
      products: [values.products],
    };

    await pb.collection('customers').create(data);

    return {
      ok: true,
      message: 'Success',
    };
  } catch (e: any) {
    return {
      ok: false,
      message: e?.response?.message,
    };
  }
}
