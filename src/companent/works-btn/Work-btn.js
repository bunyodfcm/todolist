import React, { useEffect, useRef, useState } from "react";
import "./Work-btn.scss";

const WorkBtn = (props) => {
  const [toggleBgBtn, setToggleBgBtn] = useState(false);
  const addBgColor = (e) => {
    e.preventDefault();
    return setToggleBgBtn((prev) => !prev);
  };
  return (
    <label
      className={
        toggleBgBtn ? "checkbox-bg add-modal__checkbox" : "add-modal__checkbox"
      }
      onClick={addBgColor}
    >
      <input type="checkbox" />
      <span style={{ backgroundColor: props.color }}></span>
      {props.name}
    </label>
  );
};

export default WorkBtn;
