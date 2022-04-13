import { createContext,useContext,useState } from "react";


const CartContext = createContext([])


export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children})  {



    const [cartList, setCartList] = useState([])
    

    const addToCart = (item) => {
        const existeElemento = cartList.findIndex(elemento => item.id === elemento.id);
        if (existeElemento !== -1 ) {


            const  newArray = cartList
            const newCant = cartList[existeElemento]. cantidad + item.cantidad
            newArray[existeElemento].cantidad = newCant
            setCartList([...newArray])

            
        } else {
            setCartList([
                ...cartList,
                item
            ])
        }
    }

    

    const removeCart = () => {
        setCartList([])
    }

    const precioTotal = () => {
        return cartList.reduce((acum,prod) => acum + (prod.cantidad * prod.price) , 0)
    }

    const cantidadTotalItem = () => {
        return cartList.reduce((acum, prod) => acum += prod.cantidad , 0)
    }

    const eliminarItem = (id) => {
        setCartList( cartList.filter(prod => prod.id !== id) )
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart,
            precioTotal,
            cantidadTotalItem,
            eliminarItem
        }}>
        {children}
        </CartContext.Provider>
        


    )
    


}

export default CartContextProvider