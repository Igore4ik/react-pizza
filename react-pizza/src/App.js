import React from "react";
import './App.css';
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {useDispatch, useSelector} from "react-redux";
import {filterThunk} from "./redux/actions/pizzasAC";


function App() {
    const {sortBy,categories} = useSelector(state => state.filter);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(filterThunk(sortBy,categories))
    }, [sortBy,categories])
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>

                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cart" component={Cart}/>

                </div>
            </div>
        </div>
    );
}

export default App;
