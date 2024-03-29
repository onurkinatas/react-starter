import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
   //http isteği
   useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    //     .catch(err => console.log(err));

    //awaitFetch();
    axiosGet();
   }, []);

   const awaitFetch = async () => {
    let response = await fetch("https://dummyjson.com/products")
    let json = await response.json();
    console.log(json);
   };

   const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    console.log(response.data);
   };

  return (
      <div>
          <Link to = {"/products"}>Ürünler Sayfası</Link>
      </div>
  );
}
