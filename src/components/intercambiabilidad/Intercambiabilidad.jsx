import { Link } from "react-router-dom"
import './Intercambiabilidad.css';




export const Botones1= ()=> {

    return (
        <>
        <Link to='/cart' >
            <button 
                className="Cart" 
                onClick={()=>console.log('ir a cart') } 
            >ir al Cart</button>
        </Link>
        <Link to='/*' >
            <button 
                className="List" 
                onClick={()=>console.log('ir a cart') } 
            >Seguir Comprando</button>
        </Link>
        </>
    )
}







export default Botones1
