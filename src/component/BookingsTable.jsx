import BookingsTable from '../component/BookingsTable';

export default function AdminPage() {
  const sampleData = [
    { id: 1, name: "John Doe", email: "john@gmail.com", destination: "Pokhara" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Bookings</h1>
      <BookingsTable data={sampleData} />
    </div>
  );
}