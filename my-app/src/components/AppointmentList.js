import React from 'react';
import AppointmentItem from './AppointmentItem';

function AppointmentList({ appointments, onCancelAppointment }) {
  return (
    <div className="appointment-list">
      <h2>Turnos Tomados</h2>
      {appointments.length === 0 ? (
        <p>No hay turnos agendados.</p>
      ) : (
        <ul>
          {appointments.map(appointment => (
            <AppointmentItem
              key={appointment.id}
              appointment={appointment}
              onCancelAppointment={onCancelAppointment}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppointmentList;
