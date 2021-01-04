import { createStore, combineReducers,compose, applyMiddleware } from "redux";
import {filterReducer} from "./reducers/filterReducer";
import {pizzaReducer} from "./reducers/pizzasReducer";
import thunk from "redux-thunk";
import {cartReducer} from "./reducers/cartReducer";

const rootReducer = combineReducers({
     filter: filterReducer,
     pizzas: pizzaReducer,
     cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;



