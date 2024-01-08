import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductAdd() {
let navigate = useNavigate();

const [formData, setformData] = useState({
    title: '',
    brand: '',
    category: '',
    description: '',
    price: '',
})

const handleProductAdd = async(e) => {
   
    e.preventDefault(); 
    try 
    {
        const response = await axios.post(`https://dummyjson.com/products/add`, formData);
        console.log(response.data);
        navigate("/"); 
    }
    catch (error) 
    {
        console.error("Ürün eklenirken hata oluştu:", error);
    }
 }

const handleInputChange = (e) => {
   const { name, value } = e.target;
   setformData({ ...formData, [name]: value }); }

  return (
    <div className="container mt-5">
    <form onSubmit={handleProductAdd}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title*</label>
        <input placeholder='Camera...' type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange}  />
         <div className="text-danger"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="brand" className="form-label">Brand*</label>
        <input placeholder='Sony...' type="text" className="form-control" id="brand" name="brand" value={formData.brand} onChange={handleInputChange}   />
         <div className="text-danger"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category*</label>
        <input placeholder='Electronic...' type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleInputChange}  />
         <div className="text-danger"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description*</label>
        <textarea placeholder='More about product...' className="form-control" id="description" name="description" value={formData.description} onChange={handleInputChange}  ></textarea>
        <div className="text-danger"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price*</label>
        <input placeholder='100USD...' type="text" className="form-control" id="price" name="price" value={formData.price} onChange={handleInputChange} />
        <div className="text-danger"></div>
      </div>

      <button type="submit" className="btn btn-primary" >Kaydet</button>
      <p className='mt-2' style={{color : 'grey', opacity: "80%"}}>Doldurulması zorunlu alan.*</p>
    </form>
  </div>
  )
}
