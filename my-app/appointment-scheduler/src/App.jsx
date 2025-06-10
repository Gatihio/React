import './App.css';
import { useState } from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const cancelAppointment = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  return (
    <div className="App">
      <h1>Appointment Scheduler</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList appointments={appointments} cancelAppointment={cancelAppointment} />
    </div>
  );
}

export default App;