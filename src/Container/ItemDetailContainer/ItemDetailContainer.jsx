import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../components/item/ItemList';
import ItemDetail from "../../components/ItemDetail/ItemDetail";



function ItemDetailContainer(){

    const [ producto, setProducto ] = useState( {} )
    const [ loading, setLoading] = useState( true)

    const {itemId} = useParams()
   

    useEffect(()=>{
        const querydb = getFirestore() 
        const queryProd = doc(querydb, 'Items', itemId)

        getDoc(queryProd)
        .then(resp => setProducto(  { id: resp.id, ...resp.data() }  ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    /* useEffect(()=> {
        getProducts
        .then(resp => {setProducto(resp.find( prod => prod.id === itemId))})
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    },[itemId]) */
    
    return (
              <>
              {
                  loading? <h2>Cargando...</h2>
                  : 
                  <ItemDetail producto = {producto}/>
              }
            
        </>
    )
}
export default ItemDetailContainer

/* const {itemId} = useParams()

    useEffect(()=>{
        const querydb = getFirestore() 
        const queryProd = doc(querydb, 'Items', itemId)

        getDoc(queryProd)
        .then(resp => setProducto(  { id: resp.id, ...resp.data() }  ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, []) */