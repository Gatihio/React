import React from "react";

export default function AppointmentForm({ nombre, fecha, hora, setNombre, setFecha, setHora, tomarTurno }) {
  return (
    <form onSubmit={tomarTurno} style={{ marginBottom: "2em" }}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      <input
        type="date"
        value={fecha}
        onChange={e => setFecha(e.target.value)}
      />
      <input
        type="time"
        value={hora}
        onChange={e => setHora(e.target.value)}
      />
      <button type="submit">Tomar turno</button>
    </form>
  );
}