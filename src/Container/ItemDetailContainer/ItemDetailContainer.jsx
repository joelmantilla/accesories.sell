import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../components/item/ItemList';
import ItemDetail from "../../components/ItemDetail/ItemDetail";



function ItemDetailContainer(){

    const [ producto, setProducto ] = useState( {} )
    const [ loading, setLoading] = useState( true)

    const {itemId} = useParams()

    useEffect(()=> {
        getProducts
        .then(resp => {setProducto(resp.find( prod => prod.id === itemId))})
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    },[itemId])
    
    return (
              <>
              {
                  loading? 'Cargando...' : <ItemDetail producto = {producto}/>
              }
            
        </>
    )
}
export default ItemDetailContainer