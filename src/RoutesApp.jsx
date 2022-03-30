import { useState } from 'react';
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/item/ItemList';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';




function RoutesApp() {

let titulo = 'ESTO ES REACT JS' ;

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    
        <Route 
        path="/"
        element={ <ItemList saludo={ titulo } subProp='MUNDO'/>}/>

        <Route 
        path="/color/:colorId"
        element={ <ItemList saludo={ titulo } subProp='MUNDO'/>}/>
        

        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>

        <Route path="/*" element={<Navigate to='/' replace/> } />

    </Routes>
    
    </BrowserRouter>
  );
}



export default RoutesApp;
