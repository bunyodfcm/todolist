import React, { useState } from "react";
import { JobsData } from "../../../utilist/data";
import "./Sidebar.scss";

const Saidbar = () => {
  const [labelChange, setlabelBgChange] = useState(true);
  const labelBgChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="sidebar">
      {JobsData.map((data) => (
        <label className="sidebar-label" onClick={labelBgChange} key={data.id}>
          <input type="checkbox" />
          <span style={{ backgroundColor: data.color }}></span>
          {data.name}
        </label>
      ))}
      <div className="hide-element">
        <input type="checkbox" id="hide-element" />
        <label htmlFor="hide-element">Hide Done Task</label>
      </div>
    </div>
  );
};

export default Saidbar;
