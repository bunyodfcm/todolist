import React from "react";
import { JobsData } from "../../../utilist/data";
import WorkBtn from "../../works-btn/Work-btn";
import "./Sidebar.scss";

const Saidbar = () => {
  return (
    <div className="sidebar" >
      {JobsData.map((data, index) => (
        
        <WorkBtn
          saidbar = {true}
          btnId = {data.id}
          name={data.name}
          color={data.color}
          key={index}
        />
      ))}
      <div className="hide-element">
        <input type="checkbox" id="hide-element" />
        <label htmlFor="hide-element">Hide Done Task</label>
      </div>
    </div>
  );
};

export default Saidbar;
