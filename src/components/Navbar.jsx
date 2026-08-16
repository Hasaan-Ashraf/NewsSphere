import React from "react";
import { FaNewspaper } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
            <div className="container">

                <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
                    <FaNewspaper />
                    News<span className="brand-highlight">Sphere</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#latest">
                                Latest
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#categories">
                                Categories
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;