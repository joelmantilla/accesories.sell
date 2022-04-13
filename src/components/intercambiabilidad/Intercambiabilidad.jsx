import { Link } from "react-router-dom";




export const Botones1= ()=> {

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







export default Botones1
