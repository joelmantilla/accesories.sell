import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'



const Item = ({ name, thumbnail, price, id, stock }) => {
  

  return (
    
    <article className="Carta">
      <img className="ImagenDeLista" src={thumbnail} alt="" />

      <h3 className="NombreDelProducto">{name}</h3>
      <span className="NombreDelProducto">${price}</span>
      <Link to={`/item/${id}`}>
        <button className="BotonDetalle">
        <p>detalle</p>
        </button>

      </Link>
      
    </article>
    
  );
};

export default Item;
