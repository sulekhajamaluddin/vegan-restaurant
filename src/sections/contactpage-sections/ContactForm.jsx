//Node Modules
import { useState } from "react";

//Project Files
import { useFormData } from "../../state/FormContext";
import { DatePicker, TextInput } from "../../sections";
import { changeHandler, dateChangeHandler } from "../../scripts/utils";

const intialState = {
  id: 0,
  name: "",
  email: "",
  date: "",
  time: "",
};

const ContactForm = () => {
  //Global State
  const { allBookingInfo, setAllBookingInfo } = useFormData();

  console.log(allBookingInfo);
  //Local State
  const [newBookingInfo, setNewBookingInfo] = useState(intialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllBookingInfo([...allBookingInfo, newBookingInfo]);
    setNewBookingInfo(intialState);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextInput
        changeHandler={changeHandler}
        newBookingInfo={newBookingInfo}
        allBookingInfo={allBookingInfo}
        setNewBookingInfo={setNewBookingInfo}
      />
      <label htmlFor="date">Please Select A Date:</label>
      <DatePicker
        dateChangeHandler={dateChangeHandler}
        setNewBookingInfo={setNewBookingInfo}
      />
      <label htmlFor="time">Please Select A Time:</label>
      <input
        type="time"
        id="time"
        value={newBookingInfo.time}
        required
        onChange={(e) => changeHandler(e, allBookingInfo, setNewBookingInfo)}
      />
      <input type={"submit"} />
    </form>
  );
};
export default ContactForm;
