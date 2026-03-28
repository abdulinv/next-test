import { resolve } from 'path';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_UR!, { ssl: 'require' });
interface Revenue {
  month: string;
  revenue: number;
}

export interface Invoice {
  customer_id: string;
  amount: number;
  status: string;
  date: string;
}
export async function fetchRevenu() {
  try {
    const data = await sql<Revenue[]>`SELECT * FROM revenue`;
    await new Promise((resolve) => setTimeout(() => resolve('test'), 4000));
    // console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    throw new Error('failed to fetch data');
  }
}

export async function fetchInvoice() {
  try {
    const data = await sql<Invoice[]>`SELECT * FROM invoices`;
    await new Promise((resolve) => setTimeout(() => resolve('test'), 4000));
    console.log("invoice",data);
    return data;
  } catch (e) {
    console.log(e);
    throw new Error('failed to fetch data');
  }
}
