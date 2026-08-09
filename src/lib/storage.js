const STORAGE_KEY = 'dawadi_bookings';

export function getBookings() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
}

export function addBooking(bookingData) {
  try {
    const existing = getBookings();
    const id = `DTT-2026-${String(existing.length + 1).padStart(3, '0')}`;
    const newBooking = {
      ...bookingData,
      id,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    const updated = [newBooking, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newBooking;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    throw new Error('Failed to save booking. Please try again.');
  }
}

export function cancelBooking(id) {
  try {
    const existing = getBookings();
    const updated = existing.filter((b) => b.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Error deleting from localStorage:', error);
    throw new Error('Failed to cancel booking.');
  }
}