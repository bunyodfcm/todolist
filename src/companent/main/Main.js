import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "../../assets/companent-icon/Add-icon";
import { useGetWorkContext } from "../../context/Work-context";
import { TaskData } from "../../utilist/data";
import AddModal from "../add-modal/Add-modal";
import List from "../list/List";
import "./Main.scss";
import Saidbar from "./sidebar/Sidebar";
const Main = () => {
  const [modalActive, setModalActive] = useState(false);

  const myContext = useGetWorkContext();

  const onClose = () => {
    setModalActive(false);
    myContext.setWorksSelectBtn([])
  };

  const drawList = () => {
    if (myContext.focusBtn.length === 0) {
      return TaskData.map((data) => (
        <List
          done={data.done}
          id={data.id}
          key={data.id}
          title={data.taskTitle}
          text={data.taskText}
          JobsDataId={data.JobsDataId}
        />
      ));
    } else {
      const result = TaskData.filter((data, i) => {
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
      return result.map((data) => (
        <List
          done={data.done}
          id={data.id}
          key={data.id}
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
            {modalActive ? <AddModal onClose={onClose} /> : ""}
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
