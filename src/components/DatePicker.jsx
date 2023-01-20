//Node Modules
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

//Project Files
import { useState } from "react";
import { useFormData } from "../state/FormContext";

export default function DatePicker({ dateChangeHandler }) {
  const { setNewBookingInfo } = useFormData();
  const [date, setDate] = useState(new Date());

  const onDateChange = (date) => {
    setDate(date);
    const newDate = date.toDateString().slice(4);
    dateChangeHandler(newDate, setNewBookingInfo);
  };

  return (
    <Calendar
      className={"calendar"}
      value={date}
      onChange={onDateChange}
      calendarType="US"
      minDate={new Date()}
    />
  );
}
