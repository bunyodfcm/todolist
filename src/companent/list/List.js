import React, { useEffect, useRef, useState } from "react";
import "./List.scss";
import EllipsisHorizontalIcon from "../../assets/companent-icon/EllipsisHorizontalIcon";
import { JobsData } from "../../utilist/data";
import Edit from "./edit/Edit";
// import { useGetWorkContext } from "../../context/Work-context";

const List = (props) => {
  // const newAd = useGetWorkContext();
  const [listEditChange, setListEditChange] = useState(false);
  document.addEventListener("click", () => setListEditChange(false));
  const selectItem = (id, arr) => {
    const selectObj = arr.find((el) => el.id === id);
    return selectObj.color;
  };
  const appearListEdit = (e) => {
    e.stopPropagation();
    setListEditChange(true);
  };
  const [activeDone, setActiveDone] = useState(props.done);
  const list = useRef();
  useEffect(() => {
    if (activeDone) {
      list.current.classList.add("line-through");
    }else{
      list.current.classList.remove("line-through");
    }
  }, [activeDone]);
  const textDecorationToggle = () => {
    setActiveDone(prev=>!prev)
  };
  return (
    <div className="list" ref={list}>
      <div className="list-header">
        <p>{props.title}</p>
        <EllipsisHorizontalIcon
          className="list-header__icon"
          onClick={(e) => appearListEdit(e)}
        />
        {listEditChange ? <Edit thisData={props}/> : ""}
      </div>
      <div className="list-body">
        <p>{props.text}</p>
      </div>
      <div className="list-footer">
        <div className="list-footer__left">
          {props.JobsDataId.map((item, index) => (
            <span
              className="list-footer__left-span"
              key={index}
              style={{ backgroundColor: selectItem(item, JobsData) }}
            ></span>
          ))}
        </div>
        <label className="list-footer__right">
          <input type="checkbox" onClick={textDecorationToggle} defaultChecked={activeDone} />
          <span></span>
          Done
        </label>
      </div>
    </div>
  );
};

export default List;
