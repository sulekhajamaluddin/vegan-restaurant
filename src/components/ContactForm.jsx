//Node Modules
import { useState } from "react";

//Project Files
import { DatePicker, TextInput, TimeSlot } from "../components";
import { dateChangeHandler, handleSubmit } from "../scripts/utils";

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
  const { addBookingInfo, errors, setErrors, getErrors } = useFormData();

  const onSubmit = (e) => {
    e.preventDefault();
    const allErrors = getErrors(newBookingInfo);
    const isValid = Object.keys(allErrors).length === 0;
    if (isValid) {
      handleSubmit(e, newBookingInfo, addBookingInfo);
      setReservationSuccess(true);
    } else {
      setErrors(allErrors);
      setReservationFailed(true);
    }
  };

  const changeHandler = (e, setNewBookingInfo) => {
    setNewBookingInfo((bookingInfo) => {
      return {
        ...bookingInfo,
        id: bookingInfo.length,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3>Book A Table</h3>
      {reservationFailed && (
        <div role="alert">
          <p className="error">Please fix the following errors:</p>
          <ul>
            {console.log(errors)}
            {Object.keys(errors).map((key) => {
              return <li key={key}>{errors[key]}</li>;
            })}
          </ul>
        </div>
      )}
      {reservationSuccess && (
        <p className="success">Reservation has been success.</p>
      )}
      <TextInput
        changeHandler={changeHandler}
        newBookingInfo={newBookingInfo}
        setNewBookingInfo={setNewBookingInfo}
      />
      <label htmlFor="date">Please Select A Date:</label>
      <DatePicker dateChangeHandler={dateChangeHandler} />
      <label htmlFor="time">Please Select A Time:</label>
      <TimeSlot />
      <input type={"submit"} />
    </form>
  );
};
export default ContactForm;
