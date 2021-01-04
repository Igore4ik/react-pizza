export const pizzasAC = (items) => {
    return {
        type: "SET_PIZZAS",
        payload: items
    }
}
export const isLoad = (bool) => {
    return {
        type: "SET_LOAD",
        payload: bool
    }
}

export const filterThunk = (sortBy,categories)=> (dispatch)=>{
    dispatch(isLoad(false));
    fetch(`/pizzas?${
        categories !== null ? `category=${categories}` : ''}&_sort=${sortBy}&_order=desc`)
    // fetch('http://localhost:3001/pizzas')
        // fetch('http://localhost:3000/db.json')
        .then(response => response.json())
        .then(json => {
            dispatch(pizzasAC(json));
})
}