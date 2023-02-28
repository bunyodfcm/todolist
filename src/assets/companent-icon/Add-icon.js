import React from "react";

const AddIcon = (props) => {
  return (
    <svg
      viewBox="0 0 512 512"
      {...props}
    >
      <title>Add</title>
      <path
        fill="none"
        stroke="#69665c"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 112v288M400 256H112"
      />
    </svg>
  );
};

export default AddIcon;
