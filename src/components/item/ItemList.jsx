import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productList } from './list.js';


import './Item.css' 

const ItemList = () => {
  
    const [products, setProducts] = useState([]);


  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList);
    }, 4000);
  });

  const getProductsFromDB = async () => {
    try {
      const resultado = await getProducts;
      setProducts(resultado);
    } catch (error) {
      console.log(error);
      alert('En este momento no so podra mostrar estos productos');
    }
  };


  useEffect(() => {
    getProductsFromDB();
  }, []); 

  return (
    <div className="Ficha">
      {
        
        products.length ? ( 
          <>
            {
             
              products.map((product) => {
                
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      thumbnail={product.Imagen}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...
              <img src="https://i.pinimg.com/originals/0f/85/75/0f85751bdd6ab068180057ec4638637b.gif" alt="loading" />
          </p>
        ) 
      }
    </div>
  );
};

export default ItemList;