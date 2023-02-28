import React from "react";
import { SidebarData } from "../../../utilist/data";
import "./Sidebar.scss";

const Saidbar = () => {
  console.log(SidebarData);
  return (
    <div className="sidebar">
      {SidebarData.map((data) => (
        <label className="sidebar-label">
          <input type="checkbox" />
          <span style={{backgroundColor: data.color }}></span>
          {data.name}
        </label>
      ))}
    </div>
  );
};

export default Saidbar;
