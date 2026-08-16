import React, { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryBar from "./components/CategoryBar";
import NewsGrid from "./components/NewsGrid";
import LoadingCard from "./components/LoadingCard";

import { getNews } from "./services/newsApi";

function App() {

    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchNews = async (query) => {

        if (!query.trim()) {
            setError("Please enter a search term.");
            return;
        }

        try {

            setLoading(true);
            setError("");

            const data = await getNews(query);

            setArticles(data);

        } catch (err) {

            setError(
                err.message ||
                "Something went wrong while loading news."
            );

            setArticles([]);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        fetchNews("technology");
    }, []);

    return (
        <div className="app">

            <Navbar />

            <Hero
                search={search}
                setSearch={setSearch}
                handleSearch={() => fetchNews(search)}
            />

            <CategoryBar
                onCategorySelect={(category) => {
                    setSearch(category);
                    fetchNews(category);
                }}
            />

            <main id="latest" className="news-section">

                <div className="container">

                    <div className="section-heading">

                        <div>
                            <span className="section-label">
                                LATEST STORIES
                            </span>

                            <h2>
                                Top Headlines
                            </h2>
                        </div>

                        {!loading && articles.length > 0 && (
                            <span className="article-count">
                                {articles.length} stories
                            </span>
                        )}

                    </div>

                    {error && (
                        <div className="alert alert-danger custom-alert">
                            {error}
                        </div>
                    )}

                    {loading && (
                        <div className="row g-4">

                            {Array.from({ length: 6 }).map((_, index) => (
                                <LoadingCard key={index} />
                            ))}

                        </div>
                    )}

                    {!loading && !error && articles.length === 0 && (
                        <div className="empty-state">
                            <div className="empty-icon">📰</div>

                            <h3>No news found</h3>

                            <p>
                                Try searching for another topic.
                            </p>
                        </div>
                    )}

                    {!loading && articles.length > 0 && (
                        <NewsGrid articles={articles} />
                    )}

                </div>

            </main>

            <footer className="footer">

                <div className="container text-center">

                    <h5>
                        News<span> Sphere </span>
                    </h5>

                    <p>
                        Your gateway to the latest stories around the world.
                    </p>

                    <small>
                        © {new Date().getFullYear()} News Sphere. All rights reserved.
                    </small>

                </div>

            </footer>

        </div>
    );
}

export default App;