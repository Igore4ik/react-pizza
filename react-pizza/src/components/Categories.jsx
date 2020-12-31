import React from "react";
import '../App.css';


const Categories = ({items}) => {
    const [indexNumber, setIndexNumber] = React.useState(null) ;
          const setActive = (ind) =>{
              setIndexNumber(ind)
          }
          console.log(indexNumber)
    return (
        <div className="categories">
            <ul>
                <li
                    className={indexNumber===null ? "active" : ""}
                    onClick={()=>setActive(null)}
                >Все</li>

                {items &&
                    items.map((item, index) => {
                        return (
                            <li key={`${index}_${item}`}
                                className={indexNumber===index ? "active" : ""}
                                // onClick={()=>setIndexNumber(index)}
                                onClick={()=>setActive(index)}
                            >{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Categories;

