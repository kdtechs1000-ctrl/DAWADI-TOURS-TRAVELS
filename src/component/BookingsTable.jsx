import React from 'react';

export default function BookingsTable({ data, onRefresh }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
        <p className="text-sm font-semibold text-slate-600">No bookings found in the database yet.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-xs">
        <thead className="bg-slate-50 text-slate-700 uppercase font-bold border-b border-slate-200">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Customer Name</th>
            <th className="px-4 py-3">Contact</th>
            <th className="px-4 py-3">Service / Package</th>
            <th className="px-4 py-3">Travel Date</th>
            <th className="px-4 py-3">Travelers</th>
            <th className="px-4 py-3">Submitted</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
              <td className="px-4 py-3 font-mono font-bold text-emerald-700">#BK-{item.id}</td>
              <td className="px-4 py-3 font-bold text-slate-900">{item.full_name}</td>
              <td className="px-4 py-3">
                <div className="font-medium">{item.email}</div>
                <div className="text-[10px] text-slate-500">{item.phone}</div>
              </td>
              <td className="px-4 py-3 font-medium">{item.service_name}</td>
              <td className="px-4 py-3 font-semibold text-slate-900">{item.travel_date}</td>
              <td className="px-4 py-3">{item.travelers || '1'}</td>
              <td className="px-4 py-3 text-[11px] text-slate-500">
                {new Date(item.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}