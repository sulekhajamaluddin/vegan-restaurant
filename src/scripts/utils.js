export const dateChangeHandler = (date, setNewBookingInfo) => {
  setNewBookingInfo((bookingInfo) => {
    return {
      ...bookingInfo,
      date: date,
    };
  });
};

export const changeHandler = (e, allBookingInfo, setNewBookingInfo) => {
  setNewBookingInfo((bookingInfo) => {
    return {
      ...bookingInfo,
      id: allBookingInfo.length,
      [e.target.id]: e.target.value,
    };
  });
};
