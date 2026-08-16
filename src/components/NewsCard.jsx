import React from "react";

function NewsCard({ article }) {

    const image =
        article.urlToImage ||
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c";

    const description =
        article.description ||
        "No description is available for this article.";

    const title =
        article.title || "Untitled News";

    const publishedDate = article.publishedAt
        ? new Date(article.publishedAt).toLocaleDateString()
        : "Unknown date";

    return (
        <article className="news-card">

            <div className="news-image-wrapper">

                <img
                    src={image}
                    alt={title}
                    className="news-image"
                    onError={(e) => {
                        e.target.src =
                            "https://images.unsplash.com/photo-1504711434969-e33886168f5c";
                    }}
                />

                <div className="image-overlay"></div>

                <span className="news-source">
                    {article.source?.name || "News"}
                </span>

            </div>

            <div className="news-card-body">

                <div className="news-date">
                    {publishedDate}
                </div>

                <h3 className="news-title">
                    {title}
                </h3>

                <p className="news-description">
                    {description}
                </p>

                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                >
                    Read Full Story →
                </a>

            </div>

        </article>
    );
}

export default NewsCard;