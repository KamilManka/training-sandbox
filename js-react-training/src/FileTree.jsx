import { FcOpenedFolder } from "react-icons/fc";
import { FcFolder } from "react-icons/fc";
import { FcFile } from "react-icons/fc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "./FileTree.css";
import { useState } from "react";

export const FileTree = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <ul className="file">
        {data.map((element) => {
          if (!("subFiles" in element)) {
            return (
                <li key={element.id}>
                  <FcFile />
                  {element.file}
                </li>
            );
          } else {
            return (
              <div key={element.id}>
                <li>
                  <span onClick={() => setIsExpanded(prev=>!prev)}>
                    {isExpanded ? (
                      <><MdOutlineKeyboardArrowUp /><FcOpenedFolder /></>
                    ) : (
                      <><MdOutlineKeyboardArrowDown /><FcFolder /></>
                    )}
                  </span>
                  {element.file}
                </li>
                {isExpanded ? (
                    <FileTree data={element.subFiles} />
                ) : null}
              </div>
            );
          }
        })}
      </ul>
    </>
  );
};
