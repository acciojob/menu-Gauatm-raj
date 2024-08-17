import React from "react";


const Filters = ({ categories, selectedCategory, setSelectedCategory }) => {

    return <div className="categories">
        {
            categories.map((category,index) => {
                    
                return (
                    <div className="category">
                        <input
                          className="input"
                            id={`filter-btn-${index}`}
                            data-test-id={`menu-item-${category}`}
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) => (setSelectedCategory(e.target.value))}
                        />
                        <label
                         className="label"
                            htmlFor={`filter-btn-${index}`}>
                            {category}
                        </label>

                    </div>
                 )
            })
       }
</div>

}


export default Filters;