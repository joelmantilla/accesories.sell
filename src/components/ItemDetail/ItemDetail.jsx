function ItemDetail({producto}){
    
    return(
        <>

        <div >   
            {producto.name}
        </div>

        <div >   
            {producto.color}
        </div>

        <div >   
            {producto.price}
        </div>

        </>
    )
}

export default ItemDetail