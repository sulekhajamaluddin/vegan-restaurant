//Node modules
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function FormProvider({ children }) {
  const allBookingInfo = [];
  const [errors, setErrors] = useState({});

  const values = {
    addNewBookingInfo,
    errors,
    setErrors,
    getErrors,
  };

  function addNewBookingInfo(newBookingInfo) {
    allBookingInfo.push(newBookingInfo);
  }

  function getErrors(newBookingInfo) {
    const result = {};
    const nameExpression = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const emailExpression = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!newBookingInfo.name) result.name = "Name is required";
    if (!newBookingInfo.name.trim())
      result.emptyName = "Name cannot be empty string";
    if (newBookingInfo.name && !nameExpression.test(newBookingInfo.name))
      result.name = "Please enter a valid full name";
    if (
      newBookingInfo.email &&
      !emailExpression.test(newBookingInfo.email.toLowerCase())
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

export function useFormData() {
  const context = useContext(Context);
  if (!context)
    throw new Error("useFormData must be used within a <FormProvider>");

  return context;
}
