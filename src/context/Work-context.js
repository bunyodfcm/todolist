import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export function useGetWorkContext() {
  return useContext(MyContext);
}

const WorkContext = ({ children }) => {
    
  const [focusBtn, useFocusBtn] = useState([]);
  console.log(focusBtn);

  const useFocusBtnChange =(array)=>{
    
    useFocusBtn(array)
  }
  return (
    <div>
      <MyContext.Provider value={{ focusBtn, useFocusBtnChange,useFocusBtn }}>
        {children}
      </MyContext.Provider  >
    </div>
  );
};

export default WorkContext;
