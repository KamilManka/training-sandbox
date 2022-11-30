import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { OrderCard } from "./OrderCard";
import { Button } from "@mui/material";

const getOrderById = async (id) => {
  const response = await fetch(`http://localhost:3000/orders/${id}`);
  const data = await response.json();
  return data;
};

export const OrderId = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getOrderById(id).then((data) => setData(data));
  }, [id]);

  const navigate = useNavigate();
  // const {orderId}=useParams()
  // if(orderId==='5'){
  //     navigate("/")
  // }
  if (data.length === 0) {
    return <p>Loading...</p>;
  }
  return <><Button onClick={() => navigate(-1)}>Go back</Button><OrderCard orderDetails={data} context="fullView" /></>;
};
