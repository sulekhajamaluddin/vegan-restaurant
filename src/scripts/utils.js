export const handleSubmit = (e, newBookingInfo, addNewBookingInfo) => {
  e.preventDefault();
  console.log(newBookingInfo);
  addNewBookingInfo(newBookingInfo);
};

export const dateChangeHandler = (date, setNewBookingInfo) => {
  setNewBookingInfo((bookingInfo) => {
    return {
      ...bookingInfo,
      date: date,
    };
  });
};
