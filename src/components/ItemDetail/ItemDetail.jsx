
import Intercambiabilidad from "../intercambiabilidad/Intercambiabilidad";



function ItemDetail  ({producto})  {
    
    

    return(
        <>
        <div >   
            <img src={producto.Imagen} className="w-25"/>
        </div>

        <div >   
            {producto.name}
        </div>

        <div >   
            {producto.color}
        </div>

        <div >   
            {producto.price}
        </div>
        
        <Intercambiabilidad/>
        </>
    )
}


export default ItemDetail