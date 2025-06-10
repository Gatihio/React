import React from "react";
import AppointmentItem from "./AppointmentItem";

export default function AppointmentList({ turnos, cancelarTurno }) {
  return (
    <ul>
      {turnos.map((t) => (
        <AppointmentItem key={t.id} turno={t} cancelarTurno={cancelarTurno} />
      ))}
    </ul>
  );
}