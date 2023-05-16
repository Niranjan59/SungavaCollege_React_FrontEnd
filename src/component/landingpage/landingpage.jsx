import React from 'react';
import './landingpage.css';

const LandingPage = () => {
    return (
        <>
            <header id="header" className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mt-lg-4">
                                <div className="text-container">
                                    <h1>
                                        <span className="turquoise">Modern English</span> <br />
                                        <span className="turquoise_two"> Boarding School </span>
                                    </h1>
                                    <p className="p-large principalmessage">
                                        Dear students and parents,<br />
                                        <br />
                                        It gives me great pleasure to welcome you all to our secondary school. As the principal, I believe that
                                        our school is a place where students can thrive academically, socially, and emotionally. We have a team
                                        of highly qualified and dedicated teachers who are committed to providing our students with a challenging
                                        and stimulating learning environment. Our school values inclusivity, diversity, and respect for all
                                        individuals, and we encourage our students to embrace these values throughout their time with us. I look
                                        forward to working with our students and parents to ensure that our school continues to be a safe and
                                        nurturing place where our students can achieve their full potential.<br />
                                        <br />
                                        Sincerely,<br />
                                        <br />
                                        [K N Silwal]
                                    </p>
                                    <a className="btn-solid-lg page-scroll" href="#services">
                                        DISCOVER
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-container">
                                    <img className="img-fluid" src="../../images/KNSir.jpg" alt="alternative" />
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
