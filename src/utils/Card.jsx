import React from 'react';
import { useNavigate } from "react-router-dom";

const Card = ({id,imgUrl, brand, model, price}) => {
  const navigate = useNavigate()

    return (
      <div key={id} className="col" style={{ marginTop: '2%', marginBottom: '2%'}}>
      <div className="card text-bg-dark" >
        <img src={imgUrl} className="card-img-top img-thumbnail" alt="product_image" style={{padding:'10%'}} loading="lazy" />
        <div className="card-body ">
          <div style={{height:'6rem'}}>
          <h4 className="card-title">{brand}</h4>
          <h6 className="card-subtitle mb-2 ">{model}</h6>
          </div>
          <div className="buy d-flex justify-content-between align-items-center " >
            <div className="price text-success mr-5" ><h5 className="mt-4" >{price ? `$${price}` : 'Out of stock'}</h5></div>
            <a href="#" className="btn btn-secondary mt-3" onClick={() => navigate(`/home/${id}`)} ><i className="fas fa-shopping-cart"></i> Details</a>
          </div>
        </div>
      </div>
    </div>

    );
};

export default Card;