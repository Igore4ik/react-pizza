const initialState = {
    items: [],
    isLoaded: false
}

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PIZZAS":
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case "SET_LOAD":
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state;
    }
}
