import React from 'react';
import './landingpage.css';
import aboutCollege from '../../images/aboutCollege.png'

const LandingPage = () => {
    return (
        <>
            <div className="empty"></div>
            <header id="header" className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mt-lg-4">
                                <div className="text-container">
                                    <h1>
                                        <span className="turquoise">About Our College</span> <br />
                                        <span className="turquoise_two"> A Few Words About the College </span>
                                    </h1>
                                    <p className="p-large principalmessage">
                                        Dear students and parents,<br />
                                        <br />
                                        Sungava College, established by reputed academicians and educationists, is a premier academic institution in Nepal. Within a short span of time, the institution has been able to prove itself a leading institution in imparting education inimitably. The way, the institution imparts education blends knowledge with skills such that practical, creative and purposeful learning is sure to forthcoming. Realizing that education is the substratum of the societal change, Sungava is indefatigably involved in discharging such social responsibility..........<br />
                                        <br />
                                        Sincerely,<br />
                                        <br />
                                        Campus Chief Message
                                    </p>
                                    <a className="btn-solid-lg page-scroll" href="#services">
                                        DISCOVER
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-container">
                                    <img className="img-fluid" src={aboutCollege} alt="alternative" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default LandingPage;
