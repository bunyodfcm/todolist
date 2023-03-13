import React, { useState } from "react";
import { useGetWorkContext } from "../../context/Work-context";
import "./Work-btn.scss";

const WorkBtn = (props) => {
  const myContext = useGetWorkContext();
  const [toggleBgBtn, setToggleBgBtn] = useState(false);
  const addBgColor = (e) => {
    e.preventDefault();
    setToggleBgBtn((prev) => !prev);
    if (!toggleBgBtn && props.saidbar) {
      myContext.focusBtn.push(props.btnId);
    } else if (toggleBgBtn && props.saidbar) {
      const result = myContext.focusBtn.filter((x) => x !== props.btnId);
      myContext.useFocusBtn(result);
    }
  };
  console.log(myContext);
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
