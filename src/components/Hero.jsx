import React from "react";

function Hero({ search, setSearch, handleSearch }) {

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <section className="hero-section">

            <div className="container">

                <div className="hero-content text-center">

                    <span className="hero-badge">
                        📰 STAY INFORMED
                    </span>

                    <h1>
                        Discover the
                        <span> Latest News</span>
                    </h1>

                    <p>
                        Search and explore the latest stories from around
                        the world in one place.
                    </p>

                    <div className="search-wrapper">

                        <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Search for news..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />

                        <button
                            className="btn search-btn"
                            onClick={handleSearch}
                        >
                            Search
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;