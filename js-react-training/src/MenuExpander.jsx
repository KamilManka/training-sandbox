import { useState } from "react";
import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export const MenuExpander = () => {
  const [isExpanded, setIsExpanded] = useState(1);
  let expandIcon;
  if (isExpanded) {
    expandIcon = <MdExpandLess />;
  } else {
    expandIcon = <MdExpandMore />;
  }

  return (
    <>
      {isExpanded}
      <span onClick={() => setIsExpanded(!isExpanded)}>{expandIcon}</span>
    </>
  );
};
