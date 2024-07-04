const initialState = {
 carts:[]
}



export const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                carts:[...state.carts, action.payload]
            }
            case "DELETE_FROM_CART":
             let Delete = state.carts.filter( (item) => item.id !== action.payload )
                return{                   
                    ...state,
                    carts: Delete
                }
            default :
            return state
    }
}