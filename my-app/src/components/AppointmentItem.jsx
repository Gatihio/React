import React from "react";

// Componente que representa un turno individual en la lista
// Muestra los datos del turno y el botón para cancelarlo

export default function AppointmentItem({ turno, cancelarTurno }) {
  return (
    <li className="turno-item">
      <span>
        <strong>{turno.nombre}</strong>
        <br />
        <span style={{ fontSize: "0.95em" }}>
          {turno.fecha} - {turno.hora}
        </span>
      </span>
      <button onClick={() => cancelarTurno(turno.id)}>Cancelar</button>
    </li>
  );
}
