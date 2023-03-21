import React from "react";
import { useGetWorkContext } from "../../../context/Work-context";
import "./Edit.scss";
const Edit = (props) => {
  const myContext = useGetWorkContext();
  const addEditModal = () => {
    myContext.setEditModal(true);
    myContext.setEditModalData(props);
  };
  return (
    <div className="list-edit">
      <button onClick={addEditModal}>Edit...</button>
      <button>Delete</button>
    </div>
  );
};

export default Edit;
