import React from "react";

function LoadingCard() {
    return (
        <div className="col-12 col-md-6 col-lg-4">

            <div className="loading-card">

                <div className="skeleton skeleton-image"></div>

                <div className="p-4">

                    <div className="skeleton skeleton-small"></div>

                    <div className="skeleton skeleton-title"></div>

                    <div className="skeleton skeleton-text"></div>

                    <div className="skeleton skeleton-text"></div>

                    <div className="skeleton skeleton-button"></div>

                </div>

            </div>

        </div>
    );
}

export default LoadingCard;