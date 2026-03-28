import { fetchInvoice, fetchRevenu } from '../lib/data';
import InvoiceCard from './InvoiceCard';
import RevenueCard from './RevenueCard';

export default async function Page() {
  const data = await fetchRevenu();
  const invData = await fetchInvoice();
  console.log(data);
  return (
    <div>
      <h1 className="mx-4 text-xl">Dahsboard</h1>
      <div className="flex flex-row">
        <div className="border border-blue-200 p-2 m-2 max-h-[600px] overflow-y-auto w-1/2">
          {data?.map((item) => (
            <RevenueCard key={item.month} data={item} />
          ))}
        </div>
        <div className="border border-blue-200 p-2 m-2 max-h-[600px] overflow-y-auto w-1/2">
          {invData?.map((item) => (
            <InvoiceCard key={item.customer_id} invoice={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
