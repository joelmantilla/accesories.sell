import { useCartContext } from "../../context/cartContext"


function Cart() {
  const{ cartList,removeCart } = useCartContext()
    return (
      <div>
        {cartList.map(prod => 
        <ul key={prod.id}>
          <li>nombre:{prod.name}</li>
          <li>cantidad:{prod.stock}</li>   
          </ul>)}

          <button className="btn btn-outline-warning" onClick={removeCart}>Vaciar Carrito</button>
        </div>
    )
  }
  
  export default Cart
  