import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useUserContext } from "./contexts/UserContext";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import { Avatar } from "@mui/material";
import styled from 'styled-components'


export const AsideMenu = ({ menuData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isLoggedIn } = useUserContext();
  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="aside-menu"
    >
      <div className="aside-menu__header">
        <div className="is-expanded-sign">
          {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
        </div>
        Menu
      </div>
      {isExpanded ? (
        <div>
          {menuData.map((el) => {
            return (
              <div key={el.linkName} className="aside-menu__link">
                {el.icon}{" "}
                <Link to={el.link} className="aside-menu__link__text">
                  {el.linkName}
                </Link>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
