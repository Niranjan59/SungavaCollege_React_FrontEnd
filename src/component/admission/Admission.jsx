import React from 'react'
import customBanner from '../../images/Custom_Banner.png'
import Footer from '../footer/Footer'
import '../teacherlogin/teacherlogin.css'

const Admission = () => {
    return (
        <div className="blackBodyBackground">
            <div>
                <div class="clzbanner">
                    <img src={customBanner} alt="" />
                </div>
                <div class="Secction pt-4">
                    <h2 class="text-center"><span class="scfName ">Sungava </span> <span class="sclName">College
                    </span></h2>
                    <div class="loginSectionContent mt-4 mb-5">
                        <div class="container container-fluid">
                            <div class="row">
                                <form action="<?= $base_url ?>?r=newenrollment" method="POST" class="row g-3 needs-validation"
                                    novalidate>
                                    <div class="col-md-4">
                                        <label for="validationCustom01" class="form-label text-light">Student Full
                                            Name</label>
                                        <input type="text" name="stdname" class="form-control" id="validationCustom01"
                                            Placeholder="Kumar Chaudhary" required />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="validationCustom02" class="form-label text-light">Student Mother name</label>
                                        <input type="text" name="mname" class="form-control" id="validationCustom02"
                                            placeholder="Mother Name" required />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="validationCustom03" class="form-label text-light">Student Father
                                            Name</label>
                                        <div class="input-group has-validation">
                                            <input type="text" name="fname" class="form-control" id="validationCustom03"
                                                aria-describedby="inputGroupPrepend" required />
                                            <div class="invalid-feedback">
                                                Enter your father name.
                                            </div>
                                        </div>
                                    </div>


                                    {/* <!-- =========================================================================================== -->
                                <!-- =========================================Second Column of Form============================= -->
                                <!-- =========================================================================================== --> */}

                                    <div class="col-md-6">
                                        <label for="validationCustom04" class="form-label text-light">Enter Your Address</label>
                                        <input type="text" name="address" class="form-control" id="validationCustom04" required />
                                        <div class="invalid-feedback">
                                            Please provide a valid Address.
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="validationCustom05" class="form-label text-light">Contact Number</label>
                                        <input type="tel" name="contact" class="form-control" id="validationCustom05"
                                            pattern="9[0-9]{9}" title="Please enter a valid 10-digit contact number starting with 9"
                                            required />
                                        <div class="invalid-feedback">
                                            Please provide a valid 10-digit contact number starting with 9.
                                        </div>
                                    </div>


                                    <div class="col-md-3">
                                        <label for="validationCustom06" class="form-label text-light">Gender</label>
                                        <input type="text" name="gender" class="form-control" id="validationCustom06" required />
                                        <div class="invalid-feedback">
                                            Please provide a valid Gender.
                                        </div>
                                    </div>

                                    {/* 
                                <!-- =========================================================================================== -->
                                <!-- =========================================Third Column of Form============================= -->
                                <!-- =========================================================================================== --> */}


                                    <div class="col-md-4">
                                        <label for="validationCustom07" class="form-label text-light">Enter E-mail Address</label>
                                        <input type="email" name="csei" class="form-control" id="validationCustom07" required />
                                        <div class="invalid-feedback">
                                            Please provide a valid School Name.
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <label for="exampleFormControlInput2 validationCustom08 "
                                            class="form-label text-light"> Choose Platform To Enroll </label>
                                        <select class="form-select" name="ccei" aria-label="Default select example"
                                            id="validationCustom08" required>
                                            <option selected disabled value="">Open this to select menu</option>
                                            <option value="1">+2</option>
                                            <option value="2">Bachelor</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid class.
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="exampleFormControlInput2 validationCustom09 "
                                            class="form-label text-light">Class To Enroll</label>
                                        <select class="form-select" name="cemebs" aria-label="Default select example"
                                            id="validationCustom09" required>
                                            <option selected disabled value="">Open this select menu</option>
                                            <option value="1">+2 Science</option>
                                            <option value="2">+2 Management</option>
                                            <option value="3">Bachelor in Computer Application (BCA)</option>
                                            <option value="4">Bachelor in Business Administration (BBA) </option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid class.
                                        </div>
                                    </div>



                                    {/* <!-- =========================================================================================== -->
                                <!-- =========================================Fourth Column of Form============================= -->
                                <!-- =========================================================================================== --> */}



                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" name="terms" value="Agree" type="checkbox"
                                                id="invalidCheck" required />
                                            <label class="form-check-label text-light" for="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div class="invalid-feedback text-bg-warning">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary" type="submit">Submit form</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Admission