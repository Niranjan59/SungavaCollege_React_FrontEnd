import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'


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

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            const distanceFromTop = 840;
            if (window.pageYOffset >= distanceFromTop) {
                navbar.classList.add('stickyAtPoint');
            } else {
                navbar.classList.remove('stickyAtPoint');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <nav id='navbar' className="mynavbar stickyAtPoint">
                <div className="content">
                    <div className="logo">
                        <img src={logo} height="50" />
                    </div>
                    <ul className="menu-list">
                        <div className="icon cancel-btn">
                            <i className="bi bi-x-circle"></i>
                        </div>
                        <li><a href="#"><Link to='/'> Home </Link></a></li>
                        <li><a href="#"><Link to='/StudentAchievment'> Student Achievment</Link></a></li>
                        <li><a href="#"> <Link to='/teacherLogin'>Teacher Login</Link> </a></li>
                        <li><a href="#"> <Link to='/studentAdmission'>New Admission</Link> </a></li>
                        <li><a href="#"> <Link to={'/newsEvent'}>News/Events</Link> </a></li>
                        <li><a href="#"> <Link to='/clzContact'>Contact Us</Link> </a></li>
                    </ul>
                    <div className="icon menu-btn">
                        <i className="bi bi-list"></i>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Navbar;
