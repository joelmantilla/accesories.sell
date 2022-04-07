import { createContext,useContext,useState } from "react";


const CartContext = createContext([])


export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children})  {



    const [cartList, setCartList] = useState([])
    

    const addToCart = (item) => {
        const existeElemento = cartList.find(elemento => elemento.id === item.id);
        if (existeElemento){
            existeElemento.cantidad = existeElemento.cantidad + item.cantidad

            
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

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart
        }}>
        {children}
        </CartContext.Provider>
        


    )
    


}

export default CartContextProvider