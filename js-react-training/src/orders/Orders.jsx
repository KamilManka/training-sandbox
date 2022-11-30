import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { OrderCard } from "./OrderCard";
import { Button, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToInvoice, removeFromInvoice } from "../redux/orderSlice";

const getAllOrders = async () => {
  const resp = await fetch("http://localhost:3000/orders");
  const data = await resp.json();
  return data;
};

export const Orders = () => {
  const { data, isLoading, error } = useQuery(["orders"], getAllOrders);
  const dispatch = useDispatch();
  const checkedOrders = useSelector(state => state.order.invoiceOrders)

  const orderSliceAction = (id,event) => {
    event.target.checked ? dispatch(addToInvoice(id)) : dispatch(removeFromInvoice(id));

    
  }

  

  if (!isLoading) {
    return (
      <div>
        <h2>Orders</h2>
        <Button component={Link} to="add">Add</Button>
        {data.map((el) => {
          let checked = checkedOrders.includes(el.id);
          // if (checkedOrders.includes(el.id)) {
          //   checked = true;
          // }
          return <div className="orders__single"><Checkbox id={el.id} onChange={(event) => orderSliceAction(el.id, event)} checked={checked} /><OrderCard key={el.id} orderDetails={el} context="orders-list" /></div>;
        })}
      </div>
    );
  }
};
