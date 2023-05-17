import React from 'react'
import './footer.css'
import logo from '../../images/logo.png'
import mail from '../../images/mail.svg.png'
import phone from '../../images/phone.svg.png'
import facebook from '../../images/VectorFacebook.png'
import insta from '../../images/VectorInstagram.png'
import twitter from '../../images/VectorTwitter.png'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className="container pt-4 pb-4">
                <div className="row justify-content-evenly">
                    <div className="col-lg-3 pt-4 footerLeftSection">
                        <img src={logo} alt="Logo Here" />
                        <p>Sungava College, established by reputed academicians and educationists, is a premier academic institution in Nepal.</p>
                        <div className="socialIcon">
                            <p><a href=""><img src={facebook} alt="" /></a>  </p>
                            <p><a href=""><img src={insta} alt="" /></a>  </p>
                            <p><a href=""><img src={twitter} alt="" /></a>  </p>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-4">
                        <h4 className='text-white text-center'>Useful Links</h4>
                        <div className="usefulLinks">
                            <div className="firstColLinks">
                                <a href="">Home</a>
                                <a href="">About</a>
                                <a href="">Program</a>
                                <a href="">Notices</a>
                            </div>
                            <div className="firstColLinks">
                                <a href="">Achievment</a>
                                <a href="">Gallary</a>
                                <a href="">Teacher</a>
                                <a href="">Contact</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-4 rightFooterSection">
                        <h4 className='text-white'>Useful Links</h4>
                        <h5>SUNGAVA COLLEGE</h5>
                        <p>Khairahani Municipality-6, Chitwan, Nepal</p>
                        <p> <img src={mail} alt="" /> <a href="">info@sungavacollege.edu.np</a> </p>
                        <p> <img src={phone} alt="" /> 056-582611, 583408</p>
                    </div>
                    <hr className='horizontalLine' />

                    <div className="copyrightSection">
                        <p className='text-white' >© Copyrights 2022 sungava college. All rights reserved.</p>
                        <div className="socialIcon">
                            <p><a href=""><img src={facebook} alt="" /></a>  </p>
                            <p><a href=""><img src={insta} alt="" /></a>  </p>
                            <p><a href=""><img src={twitter} alt="" /></a>  </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer