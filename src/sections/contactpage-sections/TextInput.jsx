export default function TextInput({
  newBookingInfo,
  changeHandler,
  allBookingInfo,
  setNewBookingInfo,
}) {
  return (
    <>
      <label htmlFor="name">First Name & Last Name:</label>
      <input
        type="text"
        id="name"
        value={newBookingInfo.name}
        required
        onChange={(e) => changeHandler(e, allBookingInfo, setNewBookingInfo)}
      />
      <label htmlFor="email">Email Address:</label>
      <input
        type="text"
        id="email"
        value={newBookingInfo.email}
        required
        onChange={(e) => changeHandler(e, allBookingInfo, setNewBookingInfo)}
      />
    </>
  );
}
