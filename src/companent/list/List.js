import React, { useState } from "react";
import "./List.scss";
import EllipsisHorizontalIcon from "../../assets/companent-icon/EllipsisHorizontalIcon";
import { JobsData } from "../../utilist/data";
import Edit from "./edit/Edit";

const List = (props) => {
  const [listEditChange, setListEditChange] = useState(false);
  document.addEventListener("click", ()=>setListEditChange(false))
  const selectItem = (id, arr) => {
    const selectObj = arr.find((el) => el.id === id);
    return selectObj.color;
  };
  const appearListEdit = (e)=>{
    e.stopPropagation()
    setListEditChange(true)
  }
  return (
    <div className="list">
      <div className="list-header">
        <p>{props.title}</p>
        <EllipsisHorizontalIcon
          className="list-header__icon"
          onClick={(e)=>appearListEdit(e)}
        />
        {listEditChange ? <Edit /> : ""}
      </div>
      <div className="list-body">
        <p>{props.text}</p>
      </div>
      <div className="list-footer">
        <div className="list-footer__left">
          {props.JobsDataId.map((item, index) => (
            <span
              className="salom"
              key={index}
              style={{ backgroundColor: selectItem(item, JobsData) }}
            ></span>
          ))}
        </div>
        <label className="list-footer__right">
          <input type="checkbox" />
          <span></span>
          Done
        </label>
      </div>
    </div>
  );
};

export default List;
