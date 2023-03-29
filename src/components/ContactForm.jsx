//Node Modules
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e7ik3i5",
        "template_aymdo2q",
        form.current,
        "S9-gpDMwGvAWVC6W2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
    <form
      ref={form}
      className="form"
      onSubmit={(e) => onSubmit(e, argumentsObject, sendEmail)}
    >
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
