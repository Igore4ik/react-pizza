import React from "react";
import '../App.css';
import Categories from "../components/Categories";
import Popup from "../components/Popup";
import PizzaBlock from "../components/PizzaBlock";


const Home = ({items}) => {
    console.log(items)
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Мясные','Вегетарианская','Гриль','Острые','Закрытые']}/>
                <Popup items={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {
                    items.map(el=> <PizzaBlock key={`${el.name}_${el.id}`} {...el}/>)
                }
            </div>
        </div>
    )
}

export default Home;