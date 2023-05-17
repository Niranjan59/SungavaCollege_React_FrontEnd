import React from 'react'
import About from './about/About';
import NewAbout from './add_about/NewAbout';
import Contact from './contact/Contact';
import ExtraCurriculum from './extracurriculum/ExtraCurriculum';
import Features from './features/Features';
import Footer from './footer/Footer';
import Home from './home/Home';
import LandingPage from './landingpage/landingpage';
import MiddleName from './middleName/MiddleName';
import Navbar from './navbar/Navbar';
import UpcommingEvent from './upcommingevent/UpcommingEvent';



const Index = () => {
    return (
        <div>
            <Home />
            <Navbar />
            <LandingPage />
            {/* <UpcommingEvent /> */}
            <ExtraCurriculum />
            <MiddleName />
            <About />
            <NewAbout />
            <Features />
            <Contact />
            <Footer />
        </div>
    )
}

export default Index