import { createContext, useState, useContext, useEffect } from "react";
import { useNotificationContext } from "./NotificationContext";

export const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [usersArray, setUsersArray] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setNotificationStatus, setMessage } = useNotificationContext();
  const [userName, setUserName] = useState([]);
  console.log(usersArray, isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(true);
    console.log(isLoggedIn)
    setUserName("Kamil");  
    return () => {
      
    }
  }, [])
  


  const registerUser = (userName, password) => {
    //TODO: sprawdzić czy uzytkownik istnieje
    const newUser = {
      userName,
      password,
    };
    setUsersArray((prev) => [...prev, newUser]);
    setNotificationStatus("success");
    setMessage("Zarejestrowano!");
  };

  const logIn = (values) => {
    console.log(values.login);
    //TODO
    // czy hasla sa takie same
    const user = usersArray.find((el) => el.userName === values.login);
    console.log(usersArray.find((el) => el.userName === values.login));

    if (user) {
      setIsLoggedIn(true);
      setNotificationStatus("success");
      setMessage("Zalogowano!");
      setUserName(user.userName)
    } else {
      setIsLoggedIn(false);
      setNotificationStatus("error");
      setMessage("Nie zalogowano!");
    }
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ registerUser, logIn, logOut, isLoggedIn, userName }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  const ctx = useContext(UserContext);

  if (!ctx) {
    // poza komponentem zwróci nulla
    throw new Error("Missing themeContext, it's not wrapped in UserProvider");
  }
  return ctx;
};
