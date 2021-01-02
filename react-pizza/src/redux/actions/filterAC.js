export const filterAC = (type) => {
    return {
        type: "SET_SORT_POPUP",
        payload: type
    }
}

export const categoriesAC = (index) => {
    return {
        type: "SET_CATEGORIES",
        payload: index
    }
}