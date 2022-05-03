

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useCartContext } from "../../context/cartContext";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";



function ItemDetail  ({producto})  {
    
    
const {addToCart, cartList} = useCartContext()




    function onAdd(cant) {
        
        addToCart({ ...producto, cantidad: cant})
    }
    
    console.log(cartList)
    
    
    
    
    
    return (

        <section className="cuadro">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={producto.Imagen} />
  <Card.Body>
    
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> {producto.name}</ListGroupItem>
    <ListGroupItem> {producto.color}</ListGroupItem>
    <ListGroupItem>{producto.price}</ListGroupItem>
  </ListGroup>
  
  <ItemCount  initial={1} stock={10} onAdd={onAdd} />
</Card>
        
        
         
            
        

        
        
        

        
        
        </section>
    )
}


    

    
    


export default ItemDetail