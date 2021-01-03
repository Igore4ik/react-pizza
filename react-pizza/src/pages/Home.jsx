import React from "react";
import '../App.css';
import Categories from "../components/Categories";
import Popup from "../components/Popup";
import PizzaBlock from "../components/PizzaBlock";
import {useSelector, useDispatch} from "react-redux";
import {categoriesAC, filterAC} from "../redux/actions/filterAC";
import LoaderPizzaBlock from "../components/LoaderPizzaBlock";


const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const filterNames = [
    {name: 'популярности', id: 0, type: 'popular'},
    {name: 'цене', id: 1, type: 'price'},
    {name: 'алфавиту', id: 2, type: 'name'}];


const Home = () => {
    const dispatch = useDispatch();
    const {items, isLoaded} = useSelector(state => state.pizzas);
    const {sortBy,categories} = useSelector(state => state.filter);
    const setCategory = React.useCallback((index) => {
        dispatch(categoriesAC(index));
    }, []);
    const setFilter = React.useCallback((type) => {
        dispatch(filterAC(type));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories category={categories} setCategory={setCategory} items={categoriesNames}/>
                <Popup sortBy={sortBy} setFilter={setFilter} items={filterNames}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isLoaded
                    ? items.map(el => <PizzaBlock key={`${el.name}_${el.id}`} {...el}/>)
                    : Array(10).fill(0).map((_,index)=><LoaderPizzaBlock key={index}/>)
                }
            </div>
        </div>
    )
}

export default Home;