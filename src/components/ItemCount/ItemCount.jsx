import {useState} from 'react'
import Botones1 from '../intercambiabilidad/Intercambiabilidad'

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

    const agregar = () => {
        onAdd( count )
        
        
    }
    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }

    return (
        <div>
            <button onClick={restar}> - </button>
            <label> { count } </label>
            <button onClick={sumar}> + </button><br />
            
        {
            inputType === 'button' ? 
            <button onClick={ (handleInter),agregar }>Agregar</button>
            : 
                <Botones1 />
        }
    </div>
    )
}


export default ItemCount;

