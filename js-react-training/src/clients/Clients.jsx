import React, {useEffect,useState} from "react";
import { CardSearch } from "./CardSearch";
import { Link } from "react-router-dom";
import {useThemeContext} from "../contexts/ThemeContext"

const Clients = ({clientsData}) => {

  const {isDarkTheme,toggleTheme}=useThemeContext()
  
    // const rows = clientsData.map((element, index) => {
    //   const clientIdAddress = `${element.id}`;
    //     return (<Link to={clientIdAddress}>
    //       <tr key={index}>
            
    //         <td>{element.name}</td>
    //         <td>{element.surname}</td>
    //         <td>{element.town}</td>
    //         <td>{element.phoneNumber}</td>
    //         <td><div className="client-photo">< img src={element.imgSrc}/></div></td>
            
    //       </tr></Link>
    //     );
    //   })
  return (
    <div className="clients">
      <h2>Clients</h2>
      <Link to="add">Add a client</Link>
      <CardSearch />
      {/* <table className="clients-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Town</th>
            <th>Phone</th>
            <th>Photo</th>
          </tr>
        </thead>

        <tbody>

              {rows}


        </tbody>
      </table> */}
    </div>
  );
};

export default Clients;
