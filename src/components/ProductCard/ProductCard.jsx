import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteProduct = () => {
    
    alert(props.product.title + " ürünü silindi");
    setIsDeleted(true);
  }

  if (isDeleted) {
    return null;
  }

  return (
    <div className="card">
      <img src={props.product.thumbnail} className="card-img-top" style={{height: "220px"}} alt={props.product.title} />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <Link to = {"/products/" + props.product.id} class="btn btn-primary">Detay</Link>
        <button className='btn btn-danger' onClick={deleteProduct}>Sil</button>
      </div>
    </div>
  );
}