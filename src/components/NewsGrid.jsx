import React from "react";
import NewsCard from "./NewsCard";

function NewsGrid({ articles }) {

    return (
        <div className="row g-4">

            {articles.map((article, index) => (
                <div
                    className="col-12 col-md-6 col-lg-4"
                    key={`${article.url}-${index}`}
                    style={{
                        animationDelay: `${index * 80}ms`
                    }}
                >
                    <NewsCard article={article} />
                </div>
            ))}

        </div>
    );
}

export default NewsGrid;