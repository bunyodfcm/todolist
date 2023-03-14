import React, { useRef, useState } from "react";
import { JobsData } from "../../utilist/data";
import WorkBtn from "../works-btn/Work-btn";
import "./Add-modal.scss";
const AddModal = ({ onClose }) => {
  const handly = () => {
    onClose();
  };
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [worksSelectModal, setWorksSelectModal] = useState([]);
  const workSelect = (element, add) => {
    console.log('xasax');
    if (add) {
      setWorksSelectModal(prev=> [{...prev}, element])
    }else if (!add) {
      const result = worksSelectModal.filter((x) => x !== element);
      return result
    }
  };
  const aa = () => {
    onClose();
    console.log(titleRef.current.value);
    console.log(worksSelectModal);
    console.log(descriptionRef.current.value);
  };
  return (
    <div className="add-modal" onClick={handly}>
      <form className="add-modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="add-modal__header">
          <button type="reset" onClick={handly} className="add-modal__cancel">
            Cancel
          </button>
          <button type="button" className="btn" onClick={aa}>
            Add
          </button>
        </div>
        <label htmlFor="add-modal__title" className="add-modal__label">
          Title
        </label>
        <br />
        <input
          type="text"
          id="add-modal__title"
          className="add-modal__title"
          placeholder="New title"
          ref={titleRef}
        />
        <label htmlFor="add-modal__textarea" className="add-modal__label">
          Description
        </label>
        <br />
        <textarea
          id="add-modal__textarea"
          className="add-modal__textarea"
          placeholder="New description"
          ref={descriptionRef}
        ></textarea>
        <label className="add-modal__label">Tags</label>
        <div className="add-modal__checkboxes">
          {JobsData.map((item, index) => (
            <WorkBtn
              modal={true}
              workSelect={workSelect}
              id={item.id}
              name={item.name}
              color={item.color}
              key={index}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default AddModal;
