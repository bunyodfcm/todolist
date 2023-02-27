import React from "react";

const EllipsisHorizontalIcon = (props) => {
  return (
    <svg
      viewBox="0 0 512 512"
      {...props}
    >
      <title>Ellipsis Horizontal</title>
      <circle
        cx="256"
        cy="256"
        r="32"
        fill="none"
        stroke="#b2afa1"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="416"
        cy="256"
        r="32"
        fill="none"
        stroke="#b2afa1"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="96"
        cy="256"
        r="32"
        fill="none"
        stroke="#b2afa1"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
    </svg>
  );
};

export default EllipsisHorizontalIcon;
