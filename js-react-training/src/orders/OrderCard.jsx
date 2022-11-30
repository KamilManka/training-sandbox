import React from "react";
import { Link } from "react-router-dom";
import { GetClientNameByPhone } from "./GetClientNameByPhone";

export const OrderCard = ({orderDetails, context}) => {
  const orderIdAddress = `${orderDetails.id}`;
  if (context === "orders-list") {
  return (
    <Link to={orderIdAddress} className="client-card__link">
    <div className="card order-card">
      <div className="text-details order-card__text-details">
        <div>Phone number: {orderDetails.phoneNumber}</div>
        <div>Quantity: {orderDetails.quantity}</div>
        <div>Title: {orderDetails.orderTitle}</div>
      </div>
    </div>
    </Link>
  );
  } else { return (
    <div className="card order-card">
    <div className="text-details order-card__text-details">
        <GetClientNameByPhone phone={orderDetails.phoneNumber} />
      <div>Phone number: {orderDetails.phoneNumber}</div>
      <div>Quantity: {orderDetails.quantity}</div>
      <div>Title: {orderDetails.orderTitle}</div>
      <div>Content: {orderDetails.orderContent}</div>
    </div>
  </div>
  )
  }
};
