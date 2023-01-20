export const handleSubmit = (e, newBookingInfo, addBookingInfo) => {
  e.preventDefault();
  console.log(newBookingInfo);
  addBookingInfo(newBookingInfo);
};

export const dateChangeHandler = (date, setNewBookingInfo) => {
  setNewBookingInfo((bookingInfo) => {
    return {
      ...bookingInfo,
      date: date,
    };
  });
};
