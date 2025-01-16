'use client';

import { useState,startTransition } from 'react';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { updateInvoiceStatus, State } from '@/app/lib/actions';
import { useActionState } from 'react';


const InvoiceStatus = ({ id, currentStatus }: { id?: string; currentStatus: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const statuses = {
    list:{
      paid: { text: 'Paid', icon: CheckIcon, iconClassDropdown:'bg-green-500 text-white hover:bg-green-600', parentClass:'bg-green-500 text-white hover:bg-green-600' },
      pending: { text: 'Pending', icon: ClockIcon, iconClassDropdown:'bg-yellow-500 text-black hover:bg-yellow-600', parentClass:'bg-yellow-500 text-black hover:bg-yellow-600' },
      overdue: { text: 'Overdue', icon: ClockIcon, iconClassDropdown:'bg-red-500 text-white hover:bg-red-600', parentClass:'bg-red-500 text-white hover:bg-red-600' },
    },
    forColumnStatusClass:'mr-2 h-5 w-5 text-gray-500 ml-1.5',
    forDropDownStatusClass:'px-3 py-1 transition-colors duration-300 flex justify-center'
  };
  const otherStatuses = Object.fromEntries(
    Object.entries(statuses.list).filter(([key, value]) => key !== currentStatus)
  );
  const initialState: State = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoiceStatus.bind(null, id); 
  const [state, formAction] = useActionState(updateInvoiceWithId,initialState);
  
  const handleStatusChange = (newStatus: string) => {
    const formData = new FormData();
    formData.set("status", newStatus);
    
    // Using startTransition to wrap the async action
    startTransition(async () => {
      try {
        await formAction(formData);
        setIsOpen(false);
      } catch (error) {
        console.error('Failed to update status:', error);
      }
    });
  };
  
  const statusButtons = Object.entries(otherStatuses).map(([key, status]) => (
    <button
      key={key}
      onClick={() => handleStatusChange(key)}
      className={`${statuses.forDropDownStatusClass} ${status.iconClassDropdown}`}
    >
      {status.text}
      <status.icon className="mr-2 h-5 w-5 text-gray-500 ml-1.5" />
    </button>
  ));

  const columnElement = statuses.list[currentStatus]
  return (
    <div className={`relative inline-block ${columnElement.parentClass}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3 py-1 rounded-full transition-colors duration-300 flex`}
      >
        {columnElement.text}
        <columnElement.icon className={`${statuses.forColumnStatusClass}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-300 rounded shadow-lg flex flex-col z-10">
          {statusButtons}
        </div>
      )}
    </div>
  );
};

export default InvoiceStatus;
