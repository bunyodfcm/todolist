import React, { useEffect, useState } from "react";
import { useGetWorkContext } from "../../context/Work-context";
import "./Work-btn.scss";

const WorkBtn = (props) => {
  const myContext = useGetWorkContext();
  console.log(props, 'asas');
  const [toggleBgBtn, setToggleBgBtn] = useState(false);
  // useEffect(()=>{

  // })
  const addBgColor = (e) => {
    e.preventDefault();
    setToggleBgBtn((prev) => !prev);
    if (!toggleBgBtn && props.saidbar) {
      myContext.useFocusBtn((prev) => [...prev, props.btnId]);
    } else if (toggleBgBtn && props.saidbar) {
      const result = myContext.focusBtn.filter((x) => x !== props.btnId);
      myContext.useFocusBtn(result);
    }
    if (!toggleBgBtn && props.modal) {
      myContext.workSelectModal(props.id, true);
    } else if (toggleBgBtn && props.modal) {
      myContext.workSelectModal(props.id, false);
    }
  };
  return (
    <label
      className={
        toggleBgBtn ? "checkbox-bg add-modal__checkbox" : "add-modal__checkbox"
      }
      onClick={addBgColor}
    >
      <input type="checkbox" defaultChecked={toggleBgBtn} />
      <span style={{ backgroundColor: props.color }}></span>
      {props.name}
    </label>
  );
};

export default WorkBtn;
