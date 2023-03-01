import React, { useState } from "react";
import { SidebarData } from "../../../utilist/data";
import "./Sidebar.scss";

const Saidbar = () => {
  const [labelChange, setlabelBgChange] = useState(true);
  const labelBgChange = () => {
    console.log("a");
  };
  return (
    <div className="sidebar">
      {SidebarData.map((data) => (
        <label className="sidebar-label" key={data.id}>
          <input type="checkbox" />
          <span style={{ backgroundColor: data.color }}></span>
          {data.name}
        </label>
      ))}
    </div>
  );
};

export default Saidbar;
