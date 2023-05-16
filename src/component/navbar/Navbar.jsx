import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    useEffect(() => {
        const menu = document.querySelector(".menu-list");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");

        const showMenu = () => {
            menu.classList.add("active");
            menuBtn.classList.add("hide");
        };

        const hideMenu = () => {
            menu.classList.remove("active");
            menuBtn.classList.remove("hide");
        };

        menuBtn.addEventListener("click", showMenu);
        cancelBtn.addEventListener("click", hideMenu);

        return () => {
            menuBtn.removeEventListener("click", showMenu);
            cancelBtn.removeEventListener("click", hideMenu);
        };
    }, []);

    return (
        <div>
            <nav className="mynavbar">
                <div className="content">
                    <div className="logo">
                        <img src="https://th.bing.com/th/id/R.7e8a0015935d244af373ffd25f878b7b?rik=1Ge0H7PVWxdkOw&pid=ImgRaw&r=0" height="50" />
                    </div>
                    <ul className="menu-list">
                        <div className="icon cancel-btn">
                            <i className="bi bi-x-circle"></i>
                        </div>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Student Achievment</a></li>
                        <li><a href="#">Teacher Login</a></li>
                        <li><a href="#">New Admission</a></li>
                        <li><a href="#">News/Events</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <div className="icon menu-btn">
                        <i className="bi bi-list"></i>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
