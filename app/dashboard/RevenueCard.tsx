import React from 'react';

interface Revenue {
  data: {
    month: string;
    revenue: number;
  };
}

function RevenueCard({ data }: Revenue) {
  return (
    <div className='border border-grey-500 p-2 m-2 flex flex-col gap-2 bg-blue-500 text-white'>
      <h1>{data.month}</h1>
      <p>{data.revenue}</p>
    </div>
  );
}

export default RevenueCard;
