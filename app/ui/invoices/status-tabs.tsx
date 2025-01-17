import Link from 'next/link';


export default function InvoiceTabs({ currentStatus }: { currentStatus: string }) {
const statuses = ['all', 'paid', 'pending', 'overdue', 'canceled'];

  return (
    <div className="flex gap-4 mb-4">
      {statuses.map((status) => (
        <Link
          key={status}
          href={`/dashboard/invoices?status=${status}`}
          className={`p-2 rounded-md transition-colors
            ${status === currentStatus
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Link>
      ))}
    </div>
  );
}
