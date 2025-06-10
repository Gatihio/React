import React from 'react';

function AppointmentItem({ appointment, onCancelAppointment }) {
  return (
    <li className="appointment-item">
      <div>
        <strong>{appointment.name}</strong>
        <p>Fecha: {appointment.date}</p>
        <p>Horario: {appointment.time}</p>
      </div>
      <button onClick={() => onCancelAppointment(appointment.id)}>Cancelar</button>
    </li>
  );
}

export default AppointmentItem;
