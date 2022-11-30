import React from "react";
import { useSelector } from "react-redux";
import { useQuery, useMutation,useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { deposit } from "./redux/moneySlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { reset } from "./redux/orderSlice";
import { useState } from "react";
import axios from "axios";

const getAllOrders = async () => {
  const resp = await fetch("http://localhost:3000/orders");
  const data = await resp.json();
  return data;
};

// const markAsPaid = async (id) => {
//   const resp = await fetch(`http://localhost:3000/orders/${id}`, {
//     method: "PATCH",
//     headers: { "Content-type": "application/json;charset=UTF-8" },
//     body: JSON.stringify({ paid: true }),
//   });
//   const data = await resp.json();
//   return data;
// };

const markAsPaid = async (id) => {
  console.log(id);
  await axios.patch(`http://localhost:3000/orders/${id}`, { "paid": true });

};

const getOrdersByIds=async (ids)=>{
  const promises=ids.map(id=>fetch(`http://localhost:3000/orders/${id}`))
  const fetchedData=await Promise.all(promises);
  const parsed=await Promise.all(fetchedData.map(r=>r.json()))
  return parsed;
}

export const Invoices = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient()

  const orders = useSelector((state) => state.order.invoiceOrders);

  const { data, isLoading, error } = useQuery(["orders"], ()=>getOrdersByIds(orders));

  const mutation=useMutation(["paidOrder",orders],async (orders)=>{
    const promises=orders.map(id=>fetch(`http://localhost:3000/orders/${id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({paid: true})
    }))
    await Promise.all(promises)
  },{
    onSuccess: ()=>{
      queryClient.invalidateQueries({ queryKey: ["orders"] })
    },
    onError: ()=>{
      console.error("Coś poszło nie tak")
    }
  })

  console.log(data)
  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    onSubmit: (values) => {
      let amount = values.amount;
      dispatch(deposit(amount));
      dispatch(reset());
      mutation.mutate(orders)
      // ordersToPaid.forEach((order) => {
      //   markAsPaid(order);
      // });
    },
  });

  if (!isLoading) {
    return (
      <div>
        <h2>Invoices</h2>
        Orders: {String(orders)}
        <ul>
          {orders.map((order) => {
            return (
              <li>
                <Link to={{ pathname: `/orders/${order.id}` }} relative="path">
                  {order.orderTitle}
                </Link>
              </li>
            );
          })}
        </ul>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="number"
            name="amount"
            onChange={formik.handleChange}
          />
          <Button type="submit">Mark as paid</Button>
        </form>
      </div>
    );
  }
};
