import React, { useState } from "react";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import './App.css'; // For basic styling

function App() {
  const [turnos, setTurnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const tomarTurno = (e) => {
    e.preventDefault();
    if (!nombre || !fecha || !hora) return;
    setTurnos([
      ...turnos,
      { id: Date.now(), nombre, fecha, hora }
    ]);
    setNombre("");
    setFecha("");
    setHora("");
  };

  const cancelarTurno = (id) => {
    setTurnos(turnos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Simulador de Turnos</h1>
      <AppointmentForm
        nombre={nombre}
        fecha={fecha}
        hora={hora}
        setNombre={setNombre}
        setFecha={setFecha}
        setHora={setHora}
        tomarTurno={tomarTurno}
      />
      <h2>Turnos tomados</h2>
      <AppointmentList turnos={turnos} cancelarTurno={cancelarTurno} />
    </div>
  );
}

export default App;
