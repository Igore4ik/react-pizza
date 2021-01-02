const initialState = {
    sortBy: "price",
    categories: 0
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SORT_POPUP":
            return {
                ...state,
                sortBy: action.payload
            }
        case "SET_CATEGORIES":
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}


