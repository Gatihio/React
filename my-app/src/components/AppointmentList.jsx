import React from "react";
import AppointmentItem from "./AppointmentItem";

export default function AppointmentList({ turnos, cancelarTurno }) {
  if (turnos.length === 0) {
    return <div className="no-turnos">No hay turnos registrados.</div>;
  }
  return (
    <ul>
      {turnos.map((t) => (
        <AppointmentItem key={t.id} turno={t} cancelarTurno={cancelarTurno} />
      ))}
    </ul>
  );
}
