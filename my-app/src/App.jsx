import React, { useState } from "react";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";

function App() {
  // Estado para la lista de turnos
  const [turnos, setTurnos] = useState([]);
  // Estado para el nombre ingresado
  const [nombre, setNombre] = useState("");
  // Estado para la fecha seleccionada
  const [fecha, setFecha] = useState("");
  // Estado para la hora seleccionada
  const [hora, setHora] = useState("");
  // Estado para mostrar mensajes de error
  const [error, setError] = useState("");

  // Verifica si la fecha seleccionada es hoy o una fecha futura
  const isTodayOrFuture = (dateStr) => {
    const today = new Date();
    const inputDate = new Date(dateStr + "T00:00:00");
    today.setHours(0,0,0,0);
    return inputDate >= today;
  };

  // Valida que el nombre solo contenga letras y espacios
  const soloLetrasYEspacios = (str) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(str);

  // Maneja el envío del formulario y realiza todas las validaciones
  const tomarTurno = (e) => {
    e.preventDefault();
    setError("");

    // Validación de campos obligatorios
    if (!nombre || !fecha || !hora) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    // Validación de longitud mínima del nombre
    if (nombre.trim().length < 3) {
      setError("El nombre debe tener al menos 3 letras.");
      return;
    }
    // Validación de solo letras y espacios en el nombre
    if (!soloLetrasYEspacios(nombre.trim())) {
      setError("El nombre solo puede contener letras y espacios.");
      return;
    }
    // Validación de fecha (no puede ser pasada)
    if (!isTodayOrFuture(fecha)) {
      setError("La fecha debe ser hoy o una fecha futura.");
      return;
    }
    // Validación de turno duplicado en mismo horario y fecha
    const existeHorario = turnos.some(
      (t) => t.fecha === fecha && t.hora === hora
    );
    if (existeHorario) {
      setError("Ya existe un turno registrado en ese horario.");
      return;
    }
    // Validación de nombre duplicado (sin importar mayúsculas/minúsculas o espacios)
    const nombreNormalizado = nombre.trim().toLowerCase().replace(/\s+/g, " ");
    const existeNombre = turnos.some(
      (t) =>
        t.nombre.trim().toLowerCase().replace(/\s+/g, " ") === nombreNormalizado
    );
    if (existeNombre) {
      setError("Ese nombre ya tiene un turno registrado.");
      return;
    }

    // Si pasa todas las validaciones, agrega el turno
    setTurnos([
      ...turnos,
      { id: Date.now(), nombre: nombre.trim(), fecha, hora }
    ]);
    // Limpia los campos del formulario
    setNombre("");
    setFecha("");
    setHora("");
    setError("");
  };

  // Elimina un turno por su id
  const cancelarTurno = (id) => {
    setTurnos(turnos.filter((t) => t.id !== id));
  };

  return (
    <div className="app-container">
      <img
        src="/goku.png"
        alt="Logo"
        style={{
          width: "160px",
          height: "160px",
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
