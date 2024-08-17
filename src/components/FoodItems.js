import React from "react";

const FoodItems =({dishes}) => {


    return (
        <div className="items-list">
            {dishes.map((item) => {
               return ( <div className="food-card" key={item.id}>
               <img className="img" src={item.img}/>
               <div>
                   <div>
                       <h3>{item.title}</h3>
                       <p>{item.price}$</p>
                   </div>
                   <p>{item.desc}</p>                        
               </div>
           </div>
               )
               

                
                })
            
            }


        </div>
    );

};



export default FoodItems;