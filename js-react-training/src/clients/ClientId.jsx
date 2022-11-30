import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card";
import { cards } from "../Data";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const getClientById = async (id) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`);
  const data = await response.json();
  return data;
};
const removeClientById = async (id) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export const ClientId = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    getClientById(id).then((data) => setData(data));
  }, [id]);

  const handleDelete = () => {
    removeClientById(id).then((data) => console.log(data));
  };

  if (data.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Card personalData={data} context="fullView" />
      <ButtonGroup size="small" className="clientid__button-group">
        <Button href="/" variant="contained" onClick={handleDelete}>
          Delete
        </Button>
        <Button component={Link} to={"edit"} variant="contained">
          Edit
        </Button>
      </ButtonGroup>
    </div>
  );
};
