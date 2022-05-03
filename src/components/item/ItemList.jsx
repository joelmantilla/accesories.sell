
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';


import {collection,getDocs, getFirestore, limit, orderBy, query, where} from 'firebase/firestore'
import './Item.css' 
import { productList } from './list';
import BootstrapCarousel from '../carrusel/BootstrapCarousel';




export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productList);
  }, 3000);
});


const ItemList = () => {
  
    const [products, setProducts] = useState([]);
   
    const [ loading, setLoading] = useState( true)

    const {colorId} = useParams()

    
   
useEffect(()=> {
    const queryDb = getFirestore()
    const queryCollection = collection(queryDb ,'Items')
    const queryFilter = query(queryCollection, 
      
      limit()
      
      )

    getDocs(queryFilter)
    .then(resp => setProducts(resp.docs.map(item => ({id: item.id, ... item.data()}))))
    .catch (error => alert(error))
    .finally(() => setLoading(true)) 
  }, [])

    
   
     
    

    
  const getProductsFromDB = async () => {
    

 if (colorId) {
   
 
    try {
      const resultado = await getProducts;
      setProducts(resultado.filter(item => item.category === colorId));
    } catch (error) {
      
      alert('En este momento no so podra mostrar estos productos');
    }
    finally {setLoading(true)} 

  } else {
   try {

      const resultado = await getProducts;
      setProducts(resultado);
    } catch (error) {
      
      alert('En este momento no so podra mostrar estos productos');
    }
    finally {setLoading(false)}

  }
}
    
  
  


  useEffect(() => {

    getProductsFromDB();
  }, [colorId]); 



  return (
    
    
  

    <section className="item-list-container">
      <div className="Carousel"><BootstrapCarousel/></div>
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