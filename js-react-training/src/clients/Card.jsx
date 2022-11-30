import { Link } from "react-router-dom";
import {Card as CardMui }from "@mui/material"

export const Card = ({ personalData, context }) => {
  const clientIdAddress = `${personalData.id}`;
  if (context === "search") {
    return (<Link to={clientIdAddress} className="client-card__link">
      <CardMui className="card">
    {/* <div className="card"> */}
      <div className="avatar">
        <img src={personalData.imgSrc} alt="Avatar" />
      </div>
      <div className="text-details">
        <div>{personalData.name} {personalData.surname}</div>
        <div>{personalData.town}</div>
        <div>{personalData.phone}</div>
      </div>
    {/* </div> */}
    </CardMui></Link>)
  } else {
  return (
    <CardMui className="card">
    {/* <div className="card"> */}
      <div className="avatar">
        <img src={personalData.imgSrc} alt="Avatar" />
      </div>
      <div className="text-details">
        <div>{personalData.name} {personalData.surname}</div>
        <div>Address:</div>
        <div>{personalData.street}, {personalData.postCode}</div>
        <div>{personalData.town}</div>
        <div>{personalData.subRegion}</div>
        <div>{personalData.phone}</div>
      </div>
    {/* </div> */}
    </CardMui>
  )
  }
}; 
