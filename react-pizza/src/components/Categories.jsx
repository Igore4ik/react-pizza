import React from "react";
import '../App.css';


const Categories = React.memo(({category,items,setCategory}) => {
    // const setActive = (index) =>{
    //     setCategory(index);
    // }
    return (
        <div className="categories">
            <ul>
                <li
                    className={category===null ? "active" : ""}
                    onClick={()=>setCategory(null)}
                >Все</li>

                {items &&
                items.map((item, index) => {
                    return (
                        <li key={`${index}_${item}`}
                            className={category===index ? "active" : ""}
                            onClick={()=>setCategory(index)}
                        >{item}</li>
                    )
                })
                }
            </ul>
        </div>
    )
})

export default Categories;

