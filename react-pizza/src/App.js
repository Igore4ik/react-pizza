import React from "react";
import './App.css';
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
 const [pizzas, setPizzas] = React.useState([]);
    React.useEffect(()=>{
        fetch('http://localhost:3000/db.json')
            .then(response=> response.json())
            .then(json=>{
                setPizzas(json.pizzas);
            })
    },[])
  return (
    <div className="App">
      <div className="wrapper">
         <Header/>

        <div className="content">
          <Route exact path="/" render={()=><Home items={pizzas}/>}/>
          <Route exact path="/cart" component={Cart}/>

        </div>
      </div>
    </div>
  );
}

export default App;
