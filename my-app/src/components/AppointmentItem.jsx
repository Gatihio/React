import React from "react";

export default function AppointmentItem({ turno, cancelarTurno }) {
  return (
    <li>
      {turno.nombre} - {turno.fecha} - {turno.hora}{" "}
      <button onClick={() => cancelarTurno(turno.id)}>Cancelar</button>
    </li>
  );
}