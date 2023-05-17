import React from 'react'
import './home.css'
import logo from '../../images/logo.png'

const Home = () => {
    return (
        <div>
            <div className="crouselContainer">
                <div className="bannerUpper">
                    <div className="logo">
                        <img src={logo}
                            alt="LOGO HERE" />
                    </div>
                    <div className="phone">
                        <p><a href="">info@sungavacollege.edu.np</a>  </p>
                        <p>056-582611, 583408</p>
                    </div>
                </div>
                <div className="banner">
                    <div className="cname">
                        <h3>WELCOME TO <span className="suncol"> SUNGAVA COLLEGE</span></h3>
                    </div>
                    <div className="ctitle">
                        <h3>Life the journey get the bright career</h3>
                    </div>
                    <div className="cntitle">
                        <h4>Sungava College, established by reputed academicians and educationists, is a premier academic
                            institution in Nepal.</h4>
                    </div>

                    <div className="crouselBtn">
                        <button className="programbtn">About</button>
                        <button className="programbtn">Program</button>
                    </div>
                </div>

            </div>

            <div className="contactLine">
                <div className="contactphone">
                    <p><a href="">info@sungavacollege.edu.np</a>  </p>
                    <p>056-582611, 583408</p>
                </div>
            </div>
        </div>
    )
}

export default Home