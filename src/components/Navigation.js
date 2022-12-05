import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About/>;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio/>
        }
        if (currentPage === 'Contact') {
            return <Contact/>
        }
        if (currentPage === 'Resume') {
            return <Resume/>
        }
    }

    const handlePageChange = (page) =>
    setCurrentPage(page);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a 
                            className={currentPage === 'About' ?"nav-link active" : "nav-link"}
                            onClick={() => handlePageChange('About')}
                            href="#about"
                        >
                            About me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            className={currentPage === 'Portfolio' ?"nav-link active" : "nav-link"}
                            onClick={() => handlePageChange('Portfolio')}
                            href="#portfolio"
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            className={currentPage === 'Contact' ?"nav-link active" : "nav-link"}
                            onClick={() => handlePageChange('Contact')}
                            href="#contact"
                        >
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            className={currentPage === 'Resume' ?"nav-link active" : "nav-link"} 
                            onClick={() => handlePageChange('Resume')}
                            href="#resume"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            {renderPage()}
        </>
    )
}