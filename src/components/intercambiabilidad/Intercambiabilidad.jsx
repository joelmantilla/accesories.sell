import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            <h2>Item Description</h2>
            
            {
                inputType === 'button' ? 
                    <Botones handleInter={handleInter} />
                : 
                    <Botones1 />
            }
             
        </div>
    )
}

const Botones1= ()=> {

    return (
        <>
        <Link to='/cart' >
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir a cart') } 
            >ir al Cart</button>
        </Link>
        <Link to='/*' >
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir a cart') } 
            >Seguir Comprando</button>
        </Link>
        </>
    )
}



const Botones= ({handleInter})=> {
    return <><button 
                className="btn btn-outline-danger" 
                onClick={handleInter}
            >Agregar Al carrito</button>

            
            </>
            

}



export default Intercambiabilidad
