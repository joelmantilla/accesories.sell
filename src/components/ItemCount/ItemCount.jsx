import {useState} from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount( count + 1 )
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount( count - 1 )
        }
    }

    const agregar = ({handleInter}) => {
        onAdd( count )
        return (<button 
        className="btn btn-outline-danger" 
        onClick={handleInter}
    >Agregar Al carrito</button>)
        
       
    }

    return (
        <div>
            <button onClick={restar}> - </button>
            <label> { count } </label>
            <button onClick={sumar}> + </button><br />
            <button onClick={ agregar }>Add to Cart</button>
        </div>
    )
}


export default ItemCount;

