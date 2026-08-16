import React from "react";

function CategoryBar({ onCategorySelect }) {

    const categories = [
        "Technology",
        "Business",
        "Sports",
        "Health",
        "Science",
        "Entertainment",
        "World"
    ];

    return (
        <section id="categories" className="category-section">

            <div className="container">

                <div className="category-scroll">

                    {categories.map((category) => (
                        <button
                            key={category}
                            className="category-btn"
                            onClick={() => onCategorySelect(category)}
                        >
                            {category}
                        </button>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default CategoryBar;