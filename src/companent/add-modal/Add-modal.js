import React, { useEffect, useId, useRef, useState } from "react";
import { useGetWorkContext } from "../../context/Work-context";
import { JobsData } from "../../utilist/data";
import WorkBtn from "../works-btn/Work-btn";
import "./Add-modal.scss";

const AddModal = ({ onClose }) => {
  const workContext = useGetWorkContext();
  const idGeneration = useId();

  const infoChanged = workContext.editModalData.thisData;
  useEffect(() => {
    if (workContext.editModal) {
      titleRef.current.value = infoChanged.title;
      descriptionRef.current.value = infoChanged.text;
    }
  }, []);

  // console.log(infoChanged.JobsDataId, 'aaaaa');
  
  const titleRef = useRef();
  const descriptionRef = useRef();
  const handly = () => {
    onClose();
  };
  // const [myData, setMyData] = useState([]);

  const addLocalStorage = () => {
    const oldValue = JSON.parse(localStorage.getItem("toDoData"));
    // console.log(oldValue);
    const a = {
      id: idGeneration,
      taskTitle: titleRef.current.value,
      taskText: descriptionRef.current.value,
      JobsDataId: workContext.worksSelectBtn,
      done: false,
    };
    if (!oldValue) {
      localStorage.setItem("toDoData", JSON.stringify([a]));
    } else {
      localStorage.setItem("toDoData", JSON.stringify([...oldValue, a]));
    }
    onClose();
  };

  // console.log(JSON.parse(localStorage.getItem("toDoData")));
  return (
    <div className="add-modal" onClick={handly}>
      <form className="add-modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="add-modal__header">
          <button type="reset" onClick={handly} className="add-modal__cancel">
            Cancel
          </button>
          <button type="button" className="btn" onClick={addLocalStorage}>
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
              editWorkSelect={infoChanged.JobsDataId}
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
