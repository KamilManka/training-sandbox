import React, {useEffect, useState} from "react";

export const useAPI = (url) => {
    const [isError,setIsError] = useState('');
    const [isLoading,setIsLoading] = useState('');
    
  async function getData(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: Posts cannot be loaded`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      setIsError(err);
    }
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    //setTimeout
    //setInterval
    //addEventListener
    getData(url).then((data) => {
      setData(data);
    });
  }, []);

  return {isLoading, isError, data};
};
