//Node Modules
import React, { useState } from "react";

//Project Files
export default function TimeSlot({ setNewBookingInfo }) {
  const [time, setTime] = useState("");

  const timeChangeHandler = (e) => {
    setTime(e.target.value);
    setNewBookingInfo((bookingInfo) => {
      return {
        ...bookingInfo,
        time: e.target.value,
      };
    });
  };

  const times = [];
  for (let i = 0; i < 13; i++) {
    times.push({ key: `${i + 1}`, value: `${i + 10}` });
  }
  const options = times.map((time) => (
    <option key={time.key} value={time.value}>
      {`${time.value}:00`}
    </option>
  ));
  return (
    <select
      value={time}
      className="time-slot"
      onChange={(e) => timeChangeHandler(e)}
    >
      <option>Choose a time</option>
      {options}
    </select>
  );
}
