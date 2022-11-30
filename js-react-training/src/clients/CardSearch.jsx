import React, { useState, useCallback,useEffect } from "react";
import {Card} from "./Card";
import {useQuery} from "@tanstack/react-query"

const getAllClients=async ()=>{
  const resp=await fetch("http://localhost:3000/clients")
  const data=await resp.json();
  return data;
}

export const CardSearch = () => {
  const {data,isLoading,error}=useQuery(["clients"],getAllClients)
  const [cardsToDisplay, setCardsToDisplay] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [clients,setClients]=useState([])



  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!nameSearch) {
      setCardsToDisplay(clients);
    } else {
    setCardsToDisplay(
      clients.filter(({name}) => 
        name === nameSearch
      )
    );
  }
  }, [nameSearch, cardsToDisplay]);

  if(!isLoading){

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search by name: </label>
        <input
          type="text"
          name="searchPhrase"
          onChange={(e) => setNameSearch(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
        {data.map((el) => {
            return <Card key={el.id} personalData={el} context="search" />
            })}
    </div>
  );
          }
};
