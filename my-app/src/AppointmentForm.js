import React, { useState } from 'react';

function AppointmentForm({ onAddAppointment }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    onAddAppointment({ name, date, time });
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <div className="appointment-form">
      <h2>Tomar Nuevo Turno</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Horario:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agendar Turno</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
