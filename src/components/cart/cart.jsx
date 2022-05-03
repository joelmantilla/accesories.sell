import { useState } from 'react'
import { useCartContext } from "../../context/cartContext"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore'
import './cart.css'


function Cart() {
  const[formData, setFormData] = useState({
    email: '',
    phone:'',
    name:''
  })
  const{ cartList,removeCart,precioTotal,eliminarItem  } = useCartContext()

  const generarOrden = async (e) => {
    e.preventDefault();

        // Nuevo objeto de orders    
        let orden = {}      
    
        orden.buyer = formData
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
         await addDoc(queryCollection, orden)
         .then(({id}) => alert('su numero de id es :' + id ))
       
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

  const handleChange=(event) => {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }
console.log(formData)
    return (
      <div className="Carrito">
        {cartList.map(prod => 
        
        <ul key={prod.id}>
          <img style={{height: 250 }} src={prod.Imagen} className="w-25"/>
          <li>nombre:{prod.name}</li>
          <li>cantidad:{prod.cantidad}</li>
          <li>total por unidad:{prod.cantidad * prod.price}</li>
          
          <div className='button'> 
          <button className='Button-' onClick={() => eliminarItem(prod.id) }> -</button> <hr></hr>
          </div>
          </ul>)}
        
        {precioTotal() !== 0 &&  <label> El precio total es : {precioTotal()} </label> }
          <button className="btn btn-outline-warning" onClick={removeCart}>Vaciar Carrito</button>
          
          <form
            
            >
              
            <input name='name' type="text" placeholder='ingrese el nombre' 
            onChange={handleChange} 
            value={formData.name}/>

            <input name='email' type="email" placeholder='ingrese el email' onChange={handleChange} 
            value={formData.email}/>

            <input name='phone' type="number" placeholder='ingrese el phone' onChange={handleChange} 
            value={formData.phone}/>
          
          </form>
          <button onClick={generarOrden} className="btn btn-outline-warning" >Generar orden</button>
          
         
          </div>
        
        
        
    )
  }
  
  
  export default Cart
  