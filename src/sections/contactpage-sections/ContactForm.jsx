//Node Modules
import { useState } from "react";

//Project Files
import { useFormData } from "../../state/FormContext";
import { DatePicker } from "../../sections";

const ContactForm = () => {
  //Global State
  const { allBookingInfo, setAllBookingInfo } = useFormData();

  //Local State

  return (
    <div className="form">
      <label htmlFor="name">First Name & Last Name:</label>
      <input type="text" id="name" name="name" required />
      <br />
      <label htmlFor="email">Email Address:</label>
      <input type="text" id="email" name="email" required />
      <br />
      {/* <label htmlFor="date">Please Select A Date:</label>
      <input type="date" id="date" name="date" required /> */}
      <DatePicker />
      <br />
      <label htmlFor="time">Please Select A Time:</label>
      <input type="time" id="time" name="time" required />
      <br />
    </div>
  );
};
export default ContactForm;
