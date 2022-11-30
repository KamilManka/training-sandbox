import { Button } from "@mui/material";
import React from "react";
import { AsideMenu } from "../AsideMenu";
import { useThemeContext } from "../contexts/ThemeContext";
import { menuData } from "../Data";
import { FakeLoginComponent } from "../FakeLoginComponent";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { Avatar } from "@mui/material";
import { MdOutlineAccountCircle, MdOutlineDarkMode } from "react-icons/md";
import { useSelector } from "react-redux";
import { Money } from "../Money";

export const Navbar = () => {
  const { toggleTheme } = useThemeContext();
  const { isLoggedIn, userName, logOut } = useUserContext();
  const money = useSelector((state) => state.money.value);

  return (
    <nav className="navbar">
      <AsideMenu menuData={menuData} />
      <h1>A React Page</h1>
      <div className="navbar__buttons">
        {!isLoggedIn ? (
          <>
            <Button
              component={Link}
              to="login"
              className="navbar__buttons__btn"
              sx={{ color: "aliceblue" }}
            >
              Log-in
            </Button>
            <Button
              component={Link}
              to="register"
              className="navbar__buttons__btn"
              sx={{ color: "aliceblue" }}
            >
              Sign-up
            </Button>
          </>
        ) : null}
        {isLoggedIn ? (
          <>
            <div className="navbar__avatar">
              <Button
                component={Link}
                to="/"
                className="navbar__buttons__btn"
                onClick={logOut}
              >
                Log-out
              </Button>
              <div className="navbar__avatar__greeting">Hi, {userName}! </div>
              <Avatar>
                <MdOutlineAccountCircle className="navbar__avatar__img--default" />
              </Avatar>
              <Button
                component={Link}
                to="../money"
                className="navbar__buttons__btn"
                sx={{ color: "aliceblue" }}
              >
                ${money}
              </Button>
            </div>
          </>
        ) : null}
        <Button
          onClick={toggleTheme}
          className="navbar__buttons__btn"
          sx={{ color: "aliceblue" }}
        >
          <MdOutlineDarkMode className="theme-toggle-icon" />
        </Button>
      </div>
    </nav>
  );
};
