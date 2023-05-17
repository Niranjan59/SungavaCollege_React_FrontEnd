import React from 'react'
import './teacherlogin.css'
import customBanner from '../../images/Custom_Banner.png'
import Footer from '../../component/footer/Footer'

const TeacherLogin = () => {
    return (
        <div className='blackBodyBackground'>
            <div>
                <div class="clzbanner">
                    <img src={customBanner} alt="" />
                </div>
                <div class="loginSecction ">
                    <h2><span class="scfName">Sungava</span> <span class="sclName">College</span></h2>
                    <div class="loginSectionContent mt-5">

                        <form action="" method="post">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1 " class="form-label text-light">Email address</label>
                                <input type="text" name="username" class="form-control" id="exampleFormControlInput1"
                                    placeholder="enter your usrname" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput2 " class="form-label text-light">Passwords</label>
                                <input type="password" name="password" class="form-control" id="exampleFormControlInput2"
                                    placeholder="Enter Your Password" />
                            </div>
                            <input type="submit" class="btn-solid-reg page-scroll justify-content-center" value="submit" />

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TeacherLogin