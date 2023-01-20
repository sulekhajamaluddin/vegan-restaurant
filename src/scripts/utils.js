export function handleSubmit(e, newBookingInfo, addNewBookingInfo) {
  e.preventDefault();
  console.log(newBookingInfo);
  addNewBookingInfo(newBookingInfo);
}

export function onSubmit(e, argumentsObject) {
  e.preventDefault();
  const {
    getErrors,
    newBookingInfo,
    addNewBookingInfo,
    setReservationFailed,
    setReservationSuccess,
    setNewBookingInfo,
    intialState,
    setErrors,
  } = argumentsObject;

  const allErrors = getErrors(newBookingInfo);
  const isValid = Object.keys(allErrors).length === 0;
  if (isValid) {
    handleSubmit(e, newBookingInfo, addNewBookingInfo);
    setReservationSuccess(true);
    setNewBookingInfo(intialState);
  } else {
    setErrors(allErrors);
    setReservationFailed(true);
  }
}

export function changeHandler(e, setNewBookingInfo) {
  setNewBookingInfo((bookingInfo) => {
    return {
      ...bookingInfo,
      id: bookingInfo.length,
      [e.target.id]: e.target.value,
    };
  });
}

export function dateChangeHandler(date, setNewBookingInfo) {
  setNewBookingInfo((bookingInfo) => {
    return {
      ...bookingInfo,
      date: date,
    };
  });
}

export function timeChangeHandler(e, setTime, setNewBookingInfo) {
  setTime(e.target.value);
  setNewBookingInfo((bookingInfo) => {
    return {
      ...bookingInfo,
      time: e.target.value,
    };
  });
}

export function setMessages(errors, reservationFailed, reservationSuccess) {
  return reservationFailed ? (
    <div className="alert">
      <p className="error">PLEASE FIX THE FOLLOWING ERRORS</p>
      <ul>
        {Object.keys(errors).map((key) => {
          return <li key={key}>{errors[key]}</li>;
        })}
      </ul>
    </div>
  ) : reservationSuccess ? (
    <p className="success">Reservation has been success.</p>
  ) : (
    ""
  );
}
