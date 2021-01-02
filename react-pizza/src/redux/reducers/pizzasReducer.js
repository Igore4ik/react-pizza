const initialState = {
    items: []
}

export const pizzaReducer = (state= initialState,action) => {
    if(action.type==="SET_PIZZAS"){
        return{
            ...state,
            items: action.payload
        }
    }else{
        return state;
    }
}
