// import React from "react";
// import Menu_Itmes from "./Data";
// import "../styles/App.css";


// const App = () => {
//   const [itmeFilter, setItemFilter] = React.useState("all");
//   const handleClickFilterItems = (id) => {
//     id = id.toLowerCase();
//     setItemFilter(id);
//   };
//   let filteredItems;
//   if (itmeFilter === "all") filteredItems = Menu_Itmes;
//   else {
//     filteredItems = Menu_Itmes.filter(
//       ({ category }) => category === itmeFilter
//     );
//   }

//   return (
//     <div id="main">
//       <header>
//         <h1>Our Menu</h1>
//         <hr />
//       </header>
//       <main>
//         <section className="filter-buttons">
//           <ul>
//             <li
//               id="filter-btn-1"
//               onClick={(e) => handleClickFilterItems(e.target.innerText)}
//             >
//               All
//             </li>
//             <li
//               id="filter-btn-2"
//               onClick={(e) => handleClickFilterItems(e.target.innerText)}
//             >
//               Breakfast
//             </li>
//             <li
//               id="filter-btn-3"
//               onClick={(e) => handleClickFilterItems(e.target.innerText)}
//             >
//               Lunch
//             </li>
//             <li
//               id="filter-btn-4"
//               onClick={(e) => handleClickFilterItems(e.target.innerText)}
//             >
//               Shakes
//             </li>
//           </ul>
//         </section>
//         <section className="menu-itemList">
//           {filteredItems.map(({ title, img, price, desc, id, category }) => (
//             <div
//               data-test-id={`menu-item-${category}`}
//               key={id}
//               className="menu-item"
//             >
//               <div className="menu-image-box">
//                 <img src="./images/item-1.jpeg" alt={img}  />
//               </div>
//               <div className="menu-details-box">
//                 <div className="menu-details-header">
//                   <h3>{title}</h3>
//                   <p>$ {price}</p>
//                 </div>
//                 <p>{desc}</p>
//               </div>
//             </div>
//           ))}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react'
import '../styles/App.css';
import h1 from "./images/item-1.jpeg"


function App() {
    const items=[
      {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: './images/item-1.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        price: 13.99,
        img: './images/item-2.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: './images/item-3.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        price: 20.99,
        img: './images/item-4.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: 'egg attack',
        category: 'lunch',
        price: 22.99,
        img: './images/item-5.jpeg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: 'oreo dream',
        category: 'shakes',
        price: 18.99,
        img: './images/item-6.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: 'bacon overflow',
        category: 'breakfast',
        price: 8.99,
        img: './images/item-7.jpeg',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: 'american classic',
        category: 'lunch',
        price: 12.99,
        img: './images/item-8.jpeg',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: 'quarantine buddy',
        category: 'shakes',
        price: 16.99,
        img: './images/item-9.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
    ]
    const [todisplay,setTodisplay]=useState(items);
    const [what,setWhat] = useState("all")
    const displayall=(e)=>{
      setTodisplay(items);
      setWhat("all");
      e.preventDefault();
    }
    const displaybreakfast=(e)=>{
      const temp=items.filter((item)=>{return item.category=="breakfast"})
      setTodisplay(temp);
      setWhat("breakfast");
      e.preventDefault();
    }
    const displaylunch=(e)=>{
      const temp=items.filter((item)=>{return item.category=="lunch"})
      setTodisplay(temp);
      setWhat("lunch");
      e.preventDefault();
    }
    const displayshakes=(e)=>{
      const temp=items.filter((item)=>{return item.category=="shakes"})
      setTodisplay(temp);
      setWhat("shakes");
      e.preventDefault();
    }

  return (
    <div id='main'>
        <h2>Our Menu</h2>
        <div className='menu'>
            <div id="all" onClick={displayall}>All</div>
            <button id="filter-btn-1" onClick={displaybreakfast}>Breakfast</button>
            <button id="filter-btn-2"  onClick={displaylunch}>Lunch</button>
            <button id="filter-btn-3"  onClick={displayshakes}>Shakes</button>
        </div>
        {what=="all"? <div className ="content" id='content'>
            {
              todisplay.map((item)=>{
                return <div className='card'>
                  <div className='img'><img src={h1} style={{width:"200px", height:"150px"}} alt='image'></img></div>
                  <div className='details'>
                    <div className='nameprice'>
                      <h4>{item.title}</h4>
                      <p>$ {item.price}</p>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              })
            }
        </div>: what=="breakfast"?<div className ="content" data-test-id="menu-item-breakfast">
            {
              todisplay.map((item)=>{
                return <div className='card'>
                  <div className='img'><img src={h1} style={{width:"200px", height:"150px"}} alt='image'></img></div>
                  <div className='details'>
                    <div className='nameprice'>
                      <h4>{item.title}</h4>
                      <p>$ {item.price}</p>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              })
            }
        </div>: what=="lunch"?<div className ="content" data-test-id="menu-item-lunch">
            {
              todisplay.map((item)=>{
                return <div className='card'>
                  <div className='img'><img src={h1} style={{width:"200px", height:"150px"}} alt='image'></img></div>
                  <div className='details'>
                    <div className='nameprice'>
                      <h4>{item.title}</h4>
                      <p>$ {item.price}</p>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              })
            }
        </div>:<div className ="content" data-test-id="menu-item-shakes">
            {
              todisplay.map((item)=>{
                return <div className='card'>
                  <div className='img'><img src={h1} style={{width:"200px", height:"150px"}} alt='image'></img></div>
                  <div className='details'>
                    <div className='nameprice'>
                      <h4>{item.title}</h4>
                      <p>$ {item.price}</p>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              })
            }
        </div>}
        {/* <div id='content'>
            {
              todisplay.map((item)=>{
                return <div className='card'>
                  <div className='img'><img src={item.img} alt='image'></img></div>
                  <div className='details'>
                    <div className='nameprice'>
                      <h4>{item.title}</h4>
                      <p>$ {item.price}</p>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              })
            }
        </div> */}
    </div>
  )
}

export default App