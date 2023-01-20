//Node modules
import { createContext, useContext, useState } from "react";

//Create the context
const Context = createContext(null);

//Create the provider for the parent(App.jsx)

export function FormProvider({ children }) {
  //State
  const allBookingInfo = [];

  const [errors, setErrors] = useState({});

  //Properties
  const values = {
    addNewBookingInfo,
    errors,
    setErrors,
    getErrors,
  };

  //Methods
  function addNewBookingInfo(newBookingInfo) {
    allBookingInfo.push(newBookingInfo);
  }

  console.log(allBookingInfo);

  function getErrors(newBookingInfo) {
    const result = {};
    if (!newBookingInfo.name) result.name = "Name is required";
    if (!newBookingInfo.name.trim())
      result.emptyName = "Name cannot be empty string";
    if (
      newBookingInfo.email &&
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        newBookingInfo.email.toLowerCase()
      )
    )
      result.email = "Please Enter a Valid Email";
    if (!newBookingInfo.email) result.email = "Email is required";
    if (!newBookingInfo.email.trim())
      result.emptyEmail = "Email cannot be empty string";
    if (!newBookingInfo.date) result.date = "Date is required";
    if (!newBookingInfo.time) result.time = "Time is required";
    return result;
  }

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

//Create the custom hook for the children

export function useFormData() {
  const context = useContext(Context);
  //Safeguard
  if (!context)
    throw new Error("useFormData must be used within a <FormProvider>");

  return context;
}
