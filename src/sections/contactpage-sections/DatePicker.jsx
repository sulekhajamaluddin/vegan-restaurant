//Node Modules
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

//Project Files
import { useState } from "react";
export default function DatePicker({ dateChangeHandler, setNewBookingInfo }) {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    const newDate = date.toDateString().slice(4);
    setDate(date);
    dateChangeHandler(newDate, setNewBookingInfo);
  };

  return (
    <Calendar
      className={"calendar"}
      value={date}
      onChange={onChange}
      calendarType="US"
      minDate={new Date()}
    />
  );
}
