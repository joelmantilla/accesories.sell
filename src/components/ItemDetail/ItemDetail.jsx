

import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import Botones1 from "../intercambiabilidad/Intercambiabilidad";
import ItemCount from "../ItemCount/ItemCount";



function ItemDetail  ({producto})  {
    
    
const {addToCart, cartList} = useCartContext()




    function onAdd(cant) {
        
        addToCart({ ...producto, cantidad: cant})
    }
    
    console.log(cartList)

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <>
        
         
            <img src={producto.Imagen} className="w-25"/>
        

        <div >   
            {producto.name}
        </div>

        <div >   
            {producto.color}
        </div>

        <div >   
            {producto.price}
        </div>
        {
                inputType === 'ItemCount' ? 

        <Botones1/>
        :
        <ItemCount handleInter={handleInter} initial={1} stock={10} onAdd={onAdd} />
        }
        {/* <button 
                className="btn btn-outline-danger" 
                onClick={handleInter}
            >Agregar Al carrito</button> */}
        
        
        </>
    )
}

    

    
    


export default ItemDetail