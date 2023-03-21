import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export function useGetWorkContext() {
  return useContext(MyContext);
}

const WorkContext = ({ children }) => {
  const [focusBtn, useFocusBtn] = useState([]);
  const [worksSelectBtn, setWorksSelectBtn] = useState([]);
  const workSelectModal = (element, add) => {
    if (add) {
      setWorksSelectBtn((prev) => [...prev, element]);
    } else if (!add) {
      setWorksSelectBtn((prev) => [...prev].filter((x) => x !== element));
    }
  };

  const [editModal, setEditModal] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  // console.log(editModalData);

  return (
    <MyContext.Provider
      value={{
        focusBtn,
        useFocusBtn,
        workSelectModal,
        worksSelectBtn,
        setWorksSelectBtn,
        editModal,
        setEditModal,
        setEditModalData,
        editModalData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default WorkContext;
