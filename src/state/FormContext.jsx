//Node modules
import { createContext, useContext, useState } from "react";

//Create the context
const Context = createContext(null);

//Create the provider for the parent(App.jsx)
export function FormProvider({ children }) {
  //State
  const [allBookingInfo, setAllBookingInfo] = useState([]);

  //Properties
  const values = { allBookingInfo, setAllBookingInfo };

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
