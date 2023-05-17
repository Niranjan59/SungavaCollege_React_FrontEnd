import React from 'react'
import './extra.css'
import servicesicon1 from '../../images/servicesicon1.svg';
import servicesicon2 from '../../images/servicesicon2.svg';
import servicesicon3 from '../../images/servicesicon3.svg';

const ExtraCurriculum = () => {
    return (
        <div>
            <div id="services" class="cards-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Extra-Curricular Activities</h2>
                            <p class="p-heading p-large"></p>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-4">

                            <div class="card">
                                <img class="card-image" src={servicesicon1} alt="alternative" />
                                <div class="card-body">
                                    <h4 class="card-title">Student Support</h4>
                                    <p>We also offer academic advising to help students plan their course schedules, set
                                        academic goals, and identify resources to help them succeed in their classes. Whether
                                        you need help with time management, study skills, or test-taking strategies, our
                                        advisors are here to support you.</p>
                                </div>
                            </div>

                        </div>


                        <div class="col-lg-4">

                            <div class="card">
                                <img class="card-image" src={servicesicon2} alt="alternative" />
                                <div class="card-body">
                                    <h4 class="card-title">Career Development</h4>
                                    <p>we are dedicated to helping our students prepare for their future careers. We offer a
                                        range of resources and support services to help you explore your interests, develop your
                                        skills. we believe that your education shouldn't
                                        just prepare you for your first job, but for a fulfilling and successful career. </p>
                                </div>
                            </div>
                        </div>



                        <div class="col-lg-4">
                            <div class="card">
                                <img class="card-image" src={servicesicon3} alt="alternative" />
                                <div class="card-body">
                                    <h4 class="card-title">Extra-Curricular Activities</h4>
                                    <p>Participating in extra-curricular activities not only provides a fun
                                        and engaging way to spend your time, but it also helps develop important life skills
                                        such as
                                        teamwork, leadership, and time management.
                                        We also help our students connect with their peers and
                                        feel a sense of school spirit.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExtraCurriculum