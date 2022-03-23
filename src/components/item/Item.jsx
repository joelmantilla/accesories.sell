import React from 'react';
import ItemCount from '../ItemCount/ItemCount';






const Item = ({ name, thumbnail, price, id, stock }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} Auticulares`);
  };

  return (
    
    <article className="Carta">
      <img className="ImagenDeLista" src={thumbnail} alt="" />

      <h3 className="NombreDelProducto">{name}</h3>
      <span className="NombreDelProducto">${price}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
    
  );
};

export default Item;
