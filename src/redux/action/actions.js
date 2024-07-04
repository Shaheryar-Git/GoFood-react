

export const addToCart = (item) => {
    return{
        type: "ADD_TO_CART",
        payload: item
    }
}


export const Delete = (id) => {
    return{
        type: "DELETE_FROM_CART",
        payload: id
    }
}