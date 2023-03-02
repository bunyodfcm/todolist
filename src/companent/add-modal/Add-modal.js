import React from "react";
import { JobsData } from "../../utilist/data";
import "./Add-modal.scss";
const AddModal = ({ onClose }) => {
  const handly = () => {
    onClose();
  };
  return (
    <div className="add-modal" onClick={handly}>
      <form className="add-modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="add-modal__header">
          <button type="reset" onClick={handly} className="add-modal__cancel">
            Cancel
          </button>
          <button type="submit" className="btn">
            Add
          </button>
        </div>
        <label htmlFor="add-modal__title">Title</label>
        <br />
        <input
          type="text"
          id="add-modal__title"
          className="add-modal__title"
          placeholder="New title"
        />
        <label htmlFor="add-modal__textarea">Description</label>
        <br />
        <textarea
          id="add-modal__textarea"
          className="add-modal__textarea"
          placeholder="New description"
        ></textarea>
        <label>Tags</label>
        <div className="add-modal__checkboxes">
          {JobsData.map((item) => (
            <label className="add-modal__checkbox">
              <input type="checkbox" />
              <span></span>
              {item.name}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default AddModal;
