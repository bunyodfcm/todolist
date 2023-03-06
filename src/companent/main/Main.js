import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "../../assets/companent-icon/Add-icon";
import { TaskData } from "../../utilist/data";
import AddModal from "../add-modal/Add-modal";
import List from "../list/List";
import "./Main.scss";
import Saidbar from "./sidebar/Sidebar";
const Main = () => {
  const [modalActive, setModalActive] = useState(false);

  const onClose = () => {
    setModalActive(false);
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
            <div className="main-content">
              {TaskData.map((data) => (
                <List
                  id={data.id}
                  key={data.id}
                  title={data.taskTitle}
                  text={data.taskText}
                  JobsDataId={data.JobsDataId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
