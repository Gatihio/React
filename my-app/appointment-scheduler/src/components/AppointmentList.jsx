import React from 'react';
import AppointmentItem from './AppointmentItem';

function AppointmentList({ appointments, onCancel }) {
  return (
    <div>
      <h2>Booked Appointments:</h2>
      <ul>
        {appointments.map((appointment) => (
          <AppointmentItem 
            key={appointment.id} 
            appointment={appointment} 
            onCancel={onCancel} 
          />
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;