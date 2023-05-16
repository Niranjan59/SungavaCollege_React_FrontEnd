import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div>
            <div className="crouselContainer">
                <div className="bannerUpper">
                    <div className="logo">
                        <img src="https://th.bing.com/th/id/R.7e8a0015935d244af373ffd25f878b7b?rik=1Ge0H7PVWxdkOw&pid=ImgRaw&r=0"
                            alt="LOGO HERE" />
                    </div>
                    <div className="phone text-danger.sssssss">
                        <h3>info@sungavacollege.edu.np </h3>
                        <h3>056-582611, 583408</h3>
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
                    <h3>info@sungavacollege.edu.np </h3>
                    <h3>056-582611, 583408</h3>
                </div>
            </div>
        </div>
    )
}

export default Home