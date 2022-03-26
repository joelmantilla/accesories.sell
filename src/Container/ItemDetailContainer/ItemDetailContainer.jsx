import { useEffect, useState } from 'react';
import { getProducts } from '../../components/item/ItemList';
import ItemDetail from "../../components/ItemDetail/ItemDetail";



function ItemDetailContainer(){

    const [ producto, setProducto ] = useState( {} )
    const [ loading, setLoading] = useState( true)

    useEffect(()=> {
        getProducts
        .then(resp => setProducto(resp.find( prod => prod.id === "1")))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    },[])
    
    return (
              <>
              {
                  loading? 'Cargando...' : <ItemDetail producto = {producto}/>
              }
            
        </>
    )
}
export default ItemDetailContainer