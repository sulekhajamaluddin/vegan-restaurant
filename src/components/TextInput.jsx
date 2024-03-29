export default function TextInput({
  changeHandler,
  newBookingInfo,
  setNewBookingInfo,
}) {
  return (
    <>
      <label htmlFor="name">First Name & Last Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={newBookingInfo.name}
        onChange={(e) => changeHandler(e, setNewBookingInfo)}
        required
      />
      <label htmlFor="email">Email Address:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={newBookingInfo.email}
        onChange={(e) => changeHandler(e, setNewBookingInfo)}
        required
      />
    </>
  );
}
