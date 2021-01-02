import { createStore, combineReducers } from "redux";
import {filterReducer} from "./reducers/filterReducer";
import {pizzaReducer} from "./reducers/pizzasReducer";

const rootReducer = combineReducers({
     filter: filterReducer,
     pizzas: pizzaReducer
});


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;



