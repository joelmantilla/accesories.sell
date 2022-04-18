import { useCartContext } from "../../context/cartContext"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore'


function Cart() {

  const{ cartList,removeCart,precioTotal,eliminarItem  } = useCartContext()

  const generarOrden = async (e) => {
    e.preventDefault();

        // Nuevo objeto de orders    
        let orden = {}      
    
        orden.buyer = { name: 'joel ', email: 'mantillajoel5@gmail.com', phone: '1133669843' }
        orden.total = precioTotal()
    
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name
            const precio = cartItem.price * cartItem.cantidad
            // const cantidad = cartItem.cantidad
            
            return {id, nombre, precio}   
        })   

        // creación de un documento
        const db = getFirestore() 
        const queryCollection = collection(db, 'orders')
         addDoc(queryCollection, orden)
        .then(({id}) => alert( id ))
        // .catch
        // .finally

        // update, modificar un archivo 

        // const queryUpdate =  doc(db, 'productos', '4jNlWgWGlGSO7WGASegG')
        // updateDoc(queryUpdate, {
        //     stock : 100
        // })
        // .then(resp => console.log('actualizado'))


        // console.log(orden)

        // actualizar el stock
        const queryCollectionStock = collection(db, 'Items')

        const queryActulizarStock = await query(
            queryCollectionStock, //                   ['jlksjfdgl','asljdfks'] -> ejemplo del map ,  
            where( documentId() , 'in', cartList.map(it => it.id) ) // in es que estén en ..         
        )

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        }) ))
        .finally(()=> console.log('actulalizado'))

        batch.commit()
}

  

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
          <button className="btn btn-outline-warning" onClick={generarOrden}>Generar orden</button>
        </div>
    )
  }
  
  export default Cart
  