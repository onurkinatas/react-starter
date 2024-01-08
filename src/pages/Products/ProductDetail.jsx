import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {

  const [productDetail, setProductDetail] = useState({})

  const {id} = useParams()

  const axiosGet = async () => {
    let response = await axios.get(`https://dummyjson.com/products/${id}`);
    setProductDetail(response.data)
  }

useEffect(() => {
  axiosGet()
},[])

  return (
    <div>
        <div>
            <p>{productDetail.title}</p>
        </div>
    </div>
  )
}
