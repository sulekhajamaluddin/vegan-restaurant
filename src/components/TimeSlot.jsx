//Node Modules
import React, { useState } from "react";
import { useFormData } from "../state/FormContext";

//Project Files
export default function TimeSlot() {
  const [time, setTime] = useState("");
  const { setNewBookingInfo } = useFormData();

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
      {options}
    </select>
  );
}
