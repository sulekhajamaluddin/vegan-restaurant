//Node Modules
import { useState } from "react";

//Project Files
import { DatePicker, TextInput, TimeSlot } from "../components";
import {
  changeHandler,
  dateChangeHandler,
  timeChangeHandler,
  onSubmit,
  setMessages,
} from "../scripts/utils";

import { useFormData } from "../state/FormContext";

const intialState = {
  id: 0,
  name: "",
  email: "",
  date: "",
  time: "",
};

const ContactForm = () => {
  //Local State
  const [newBookingInfo, setNewBookingInfo] = useState(intialState);
  const [reservationFailed, setReservationFailed] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  //Global State
  const { addNewBookingInfo, errors, setErrors, getErrors } = useFormData();

  const argumentsObject = {
    getErrors: getErrors,
    newBookingInfo: newBookingInfo,
    addNewBookingInfo: addNewBookingInfo,
    setReservationSuccess: setReservationSuccess,
    setNewBookingInfo: setNewBookingInfo,
    intialState: intialState,
    setErrors: setErrors,
    setReservationFailed: setReservationFailed,
  };

  return (
    <form className="form" onSubmit={(e) => onSubmit(e, argumentsObject)}>
      <h3>Book A Table</h3>
      {setMessages(errors, reservationFailed, reservationSuccess)}
      <TextInput
        changeHandler={(e) => changeHandler(e, setNewBookingInfo)}
        newBookingInfo={newBookingInfo}
        setNewBookingInfo={setNewBookingInfo}
      />
      <label htmlFor="date">Please Select A Date:</label>
      <DatePicker
        dateChangeHandler={dateChangeHandler}
        setNewBookingInfo={setNewBookingInfo}
      />
      <label htmlFor="time">Please Select A Time:</label>
      <TimeSlot
        timeChangeHandler={timeChangeHandler}
        setNewBookingInfo={setNewBookingInfo}
      />
      <input type={"submit"} />
    </form>
  );
};
export default ContactForm;
