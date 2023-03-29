//Node Modules
import React, { useState } from "react";

//Project Files
export default function TimeSlot({ timeChangeHandler, setNewBookingInfo }) {
  const [time, setTime] = useState("");

  const times = [];
  for (let i = 0; i < 13; i++) {
    times.push({ key: `${i + 1}`, value: `${i + 10}` });
  }

  const options = times.map((time) => (
    <option key={time.key} value={time.value}>
      {`${time.value}:00 - ${Number(time.value) + 1}:00`}
    </option>
  ));
  return (
    <select
      value={time}
      className="time-slot"
      onChange={(e) => timeChangeHandler(e, setTime, setNewBookingInfo)}
    >
      <option value="">Choose a time</option>
      {options}
    </select>
  );
}
