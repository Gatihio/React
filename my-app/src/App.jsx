import React, { useState } from "react";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";

function App() {
  const [turnos, setTurnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [error, setError] = useState("");

  const isTodayOrFuture = (dateStr) => {
    const today = new Date();
    const inputDate = new Date(dateStr + "T00:00:00");
    today.setHours(0,0,0,0);
    return inputDate >= today;
  };

  const soloLetrasYEspacios = (str) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(str);

  const tomarTurno = (e) => {
    e.preventDefault();
    setError("");

    if (!nombre || !fecha || !hora) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (nombre.trim().length < 3) {
      setError("El nombre debe tener al menos 3 letras.");
      return;
    }
    if (!soloLetrasYEspacios(nombre.trim())) {
      setError("El nombre solo puede contener letras y espacios.");
      return;
    }
    if (!isTodayOrFuture(fecha)) {
      setError("La fecha debe ser hoy o una fecha futura.");
      return;
    }
    const existeHorario = turnos.some(
      (t) => t.fecha === fecha && t.hora === hora
    );
    if (existeHorario) {
      setError("Ya existe un turno registrado en ese horario.");
      return;
    }
    const nombreNormalizado = nombre.trim().toLowerCase().replace(/\s+/g, " ");
    const existeNombre = turnos.some(
      (t) =>
        t.nombre.trim().toLowerCase().replace(/\s+/g, " ") === nombreNormalizado
    );
    if (existeNombre) {
      setError("Ese nombre ya tiene un turno registrado.");
      return;
    }

    setTurnos([
      ...turnos,
      { id: Date.now(), nombre: nombre.trim(), fecha, hora }
    ]);
    setNombre("");
    setFecha("");
    setHora("");
    setError("");
  };

  const cancelarTurno = (id) => {
    setTurnos(turnos.filter((t) => t.id !== id));
  };

  return (
    <div className="app-container">
      <img
        src="/goku.png"
        alt="Logo"
        style={{
          width: "160px",      // Cambia el tamaño aquí
          height: "160px",     // Cambia el tamaño aquí
          objectFit: "contain",
          marginBottom: "1em",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)"
        }}
      />
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
      {error && (
        <div style={{
          color: "#e57373",
          background: "#23232b",
          borderRadius: "8px",
          padding: "0.7em",
          margin: "1em 0",
          fontFamily: "'Playfair Display', serif"
        }}>
          {error}
        </div>
      )}
      <h2>Turnos registrados</h2>
      <AppointmentList turnos={turnos} cancelarTurno={cancelarTurno} />
    </div>
  );
}

export default App;
