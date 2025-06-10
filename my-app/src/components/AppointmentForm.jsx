import React from "react";

// Componente de formulario para tomar un turno
// Recibe los estados y funciones para manejar los campos y el envío

export default function AppointmentForm({ nombre, fecha, hora, setNombre, setFecha, setHora, tomarTurno }) {
  return (
    <form onSubmit={tomarTurno}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
      />
      <input
        type="date"
        value={fecha}
        onChange={e => setFecha(e.target.value)}
        required
      />
      <input
        type="time"
        value={hora}
        onChange={e => setHora(e.target.value)}
        required
      />
      <button type="submit">Tomar turno</button>
    </form>
  );
}
