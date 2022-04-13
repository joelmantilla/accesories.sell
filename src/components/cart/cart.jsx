import { useCartContext } from "../../context/cartContext"
import ItemCount from "../ItemCount/ItemCount";


function Cart() {

  const{ cartList,removeCart,precioTotal,eliminarItem  } = useCartContext()

  

    return (
      <div className="">
        {cartList.map(prod => 
        
        <ul key={prod.id}>
          <img src={prod.Imagen} className="w-25"/>
          <li>nombre:{prod.name}</li>
          <li>cantidad:{prod.cantidad}</li>
          <li>total por unidad:{prod.cantidad * prod.price}</li>
          
          <button onClick={() => eliminarItem(prod.id) }> - </button> <hr></hr>
          
          </ul>)}
        
        {precioTotal() !== 0 &&  <label> El precio total es : {precioTotal()} </label> }
          <button className="btn btn-outline-warning" onClick={removeCart}>Vaciar Carrito</button>
        </div>
    )
  }
  
  export default Cart
  