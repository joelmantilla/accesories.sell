import React from 'react';
import { useState } from 'react';

import './ItemCount.css';

const ItemCount = () => {
  const initial = 1; 
  const stock = 10; 

  
  const [qty, setQty] = useState(initial);

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="Contador">
      <div className="SumaResta">
        <button
          className="Botones"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="Variante">{qty}</span>
        <button
          className="Botones"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-resultado"
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;

