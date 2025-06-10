import React, { useState } from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import './App.css'; // For basic styling

function App() {
  const [appointments, setAppointments] = useState([]);

  // Function to add a new appointment
  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, { ...newAppointment, id: Date.now() }]); // Add a unique ID
  };

  // Function to cancel an appointment
  const cancelAppointment = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <div className="App">
      <h1>Simulador de Turnos Online</h1>
      <AppointmentForm onAddAppointment={addAppointment} />
      <AppointmentList appointments={appointments} onCancelAppointment={cancelAppointment} />
    </div>
  );
}

export default App;
