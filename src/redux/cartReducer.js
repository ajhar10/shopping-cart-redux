import {ADD_TO_CART, INCREMENT, DECREMENT} from './actionsTypes'

const initialState = {
    products: [
        {
            id: 1,
            name: "Dell E1916HV 18.5 Inch (35)",
            price: 9300,
            qty: 35
        
        },
        {
            id: 2,
            name: "Canon Eos 4000D 18MP (72)",
            price: 36500,
            qty: 72
        
        },
        {
            id: 3,
            name: "Asus Vivobook X515MA (20)",
            price: 35500,
            qty: 20
        
        }
    ],
    cart: [],
    currentItem: null
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            //check the product data from the product array
            const item = state.products.find(product=>product.id === action.payload.id)
            //check the cart data from the cart array
            const inCart = state.cart.find(item=> 
                item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart : inCart ?
                        state.cart.map(item=>item.id===action.payload.id ? 
                            {...item, qty: item.qty + 1}:item) 
                    :   [...state.cart,{...item, qty: 1}]
            };
        // case INCREMENT:
        //     return {};
        // case DECREMENT:
        //     return {};
        default:
            return state;
    }

}

export default cartReducer;