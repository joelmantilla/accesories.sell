
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';



import './Item.css' 
import { productList } from './list';




export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productList);
  }, 4000);
});


const ItemList = () => {
  
    const [products, setProducts] = useState([]);
    const [ loading, setLoading] = useState( true)

    const {colorId} = useParams()

    

  const getProductsFromDB = async () => {
    

 if (colorId) {
   
 
    try {
      const resultado = await getProducts;
      setProducts(resultado.filter(item => item.color === colorId));
    } catch (error) {
      console.log(error);
      alert('En este momento no so podra mostrar estos productos');
    }
    finally {setLoading(false)}

  } else {
   try {

      const resultado = await getProducts;
      setProducts(resultado);
    } catch (error) {
      console.log(error);
      alert('En este momento no so podra mostrar estos productos');
    }
    finally {setLoading(false)}

  }
    
  };

  


  useEffect(() => {

    getProductsFromDB();
  }, [colorId]); 

  console.log(colorId)

  return (
    <section className="item-list-container">
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
    </section>
  );
};



export default ItemList;