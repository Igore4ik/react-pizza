const initialState = {
    items: [],
    totalPrice: 0,
    totalItems: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CART":
            return {
                ...state,
                items: [...state.items, action.obj],
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + action.obj.price
            }

        default:
            return state;
    }
}


