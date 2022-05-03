import {useState} from 'react'
import Botones1 from '../intercambiabilidad/Intercambiabilidad'
import './ItemCount.css'


const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)
    const [button, setButton] = useState(false)

    const handleButton = () => {
        setButton(true)
        onAdd(count)
    }

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

    
    

    
    const AgregarButton = ({handleButton}) => {
        return (
            <button className='Purchase'  onClick={handleButton}> 
                Comprar
            </button>
        )
    }
    

    return (
        <div>
            <button className='Subtraction' onClick={restar}> - </button>
            <label className='Number'> { count } </label>
            <button className='Add' onClick={sumar}> + </button><br />
            
        {
              button === false  ? 
                <AgregarButton handleButton={handleButton}/>
            : 
                <Botones1 />
        }
    </div>
    )
}


export default ItemCount;

