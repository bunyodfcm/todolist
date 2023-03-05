import React, { useRef } from "react";
import "./Work-btn.scss";

const WorkBtn = (props) => {
  // const [] = props
  return (
    <label
      className="add-modal__checkbox checkbox-bg"
      // key={p}
      // ref={a}
      // onClick={addBgColor}
    >
      <input type="checkbox" />
      <span style={{ backgroundColor: props.color }}></span>
      {props.name}
    </label>
  );
};

export default WorkBtn;
