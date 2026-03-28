import React from 'react';
import { Invoice } from '../lib/data';

interface InvoiceCardProps {
  invoice: Invoice;
}

function InvoiceCard({ invoice }: InvoiceCardProps) {
  return (
    <div className='border border-grey-500 m-2 p-2 bg-red-100 text-white'>
      <p>{invoice.  customer_id}</p>
      <p>{invoice.amount}</p>
      <p>{invoice.status}</p>
    </div>
  );
}

export default InvoiceCard;
