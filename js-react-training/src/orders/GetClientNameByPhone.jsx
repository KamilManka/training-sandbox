import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";

const getAllClients = async (currentPhone) => {
  const phone=currentPhone.replaceAll("+","")
  console.log(phone)
  const resp = await fetch(`http://localhost:3000/clients?phone_like=${phone}`);
  const data = await resp.json();
  return data[0];
};

export const GetClientNameByPhone = ({phone}) => {
  const { data, isLoading, error } = useQuery(["clients"], ()=>getAllClients(phone));

  // const [clientsData, setClientsData] = useState([]);
  
  // useEffect(() => {
  //   getAllClients().then((data) => setClientsData(data));
  // }, []);


  // let clientData = clientsData.find((el) => el.phone === phone);
  // console.log(clientData);

  return <div></div>;
};
