import { useState } from 'react';

import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/item/ItemList';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/cart';
import CartContextProvider from './context/cartContext';











function RoutesApp() {

let titulo = 'ESTO ES REACT JS' ;

  return (
    <div className='Body'>
    <BrowserRouter >
    <CartContextProvider>

    <NavBar/>

    
    
    <Routes>
    
        <Route 
        path="/"
        element={ <ItemList saludo={ titulo } subProp='MUNDO'/>}/>

        <Route 
        path="/category/:colorId"
        element={ <ItemList saludo={ titulo } subProp='MUNDO'/>}/>
        
        <Route path="/cart" element={<Cart/>}/>

        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>

        <Route path="/*" element={<Navigate to='/' replace/> } />

    </Routes>
    </CartContextProvider>
    </BrowserRouter>
    </div>
  );
}



export default RoutesApp;
