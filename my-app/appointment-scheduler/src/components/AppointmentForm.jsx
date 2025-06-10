import { useState } from 'react';

function AppointmentForm({ addAppointment }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      setError('All fields are required');
      return;
    }
    addAppointment({ name, date, time });
    setName('');
    setDate('');
    setTime('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default AppointmentForm;