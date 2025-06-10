import React from 'react';

function AppointmentItem({ appointment, onCancel }) {
  const { id, name, date, time } = appointment;

  return (
    <li>
      <div>
        <strong>{name}</strong>
        <p>{date} at {time}</p>
        <button onClick={() => onCancel(id)}>Cancel</button>
      </div>
    </li>
  );
}

export default AppointmentItem;