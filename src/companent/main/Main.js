import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "../../assets/companent-icon/Add-icon";
import { useGetWorkContext } from "../../context/Work-context";
import AddModal from "../add-modal/Add-modal";
import List from "../list/List";
import "./Main.scss";
import Saidbar from "./sidebar/Sidebar";
const Main = () => {
  const myContext = useGetWorkContext();
  const TaskData = JSON.parse(localStorage.getItem("toDoData"));

  const [modalActive, setModalActive] = useState(false);
  const onClose = () => {
    setModalActive(false);
    myContext.setEditModal(false)
    myContext.setWorksSelectBtn([]);
    myContext.setEditModalData(null);
  };
  const toggleModal = () => {
    if (modalActive) {
      return <AddModal onClose={onClose} />;
    }else if (myContext.editModal) {
      return <AddModal onClose={onClose} />;
    }
  };

  const drawList = () => {
    if (myContext.focusBtn.length === 0) {
      return TaskData.map((data, index) => (
        <List
          done={data.done}
          id={data.id}
          key={index}
          title={data.taskTitle}
          text={data.taskText}
          JobsDataId={data.JobsDataId}
        />
      ));
    } else {
      const result = TaskData.filter((data) => {
        const result1 = data.JobsDataId.filter((item) => {
          const result2 = myContext.focusBtn.filter((x) => x === item);
          if (result2.length !== 0) {
            return true;
          } else {
            return false;
          }
        });
        return result1.length !== 0 ? true : false;
      });
      return result.map((data, index) => (
        <List
          done={data.done}
          id={data.id}
          key={index}
          title={data.taskTitle}
          text={data.taskText}
          JobsDataId={data.JobsDataId}
        />
      ));
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main-wrapper">
          <div className="main-header" id="main-header">
            <NavLink to="/" className="main-logo">
              todo
            </NavLink>
            <AddIcon
              className="add-icon"
              onClick={() => setModalActive(true)}
            />
            {/* {modalActive ? <AddModal onClose={onClose} /> : ""} */}
            {toggleModal()}
          </div>
          <div className="main-body">
            <div className="main-sidebar">
              <Saidbar />
            </div>
            <div className="main-content">{drawList()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
