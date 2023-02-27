import React from "react";
import "./List.scss";
import EllipsisHorizontalIcon from "../../assets/companent-icon/EllipsisHorizontalIcon";

const List = () => {
  return (
    <div className="list">
      <div className="list-header">
        <p>Downlond todo lisy</p>
        <EllipsisHorizontalIcon className="list-header__icon" />
      </div>
      <div className="list-body">
        <p>the first step forbetter life</p>
      </div>
      <div className="list-footer">
        <div className="list-footer__left">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="list-footer__right">
          <input type="checkbox" />
          <span></span>
          Done
        </div>
      </div>
    </div>
  );
};

export default List;
