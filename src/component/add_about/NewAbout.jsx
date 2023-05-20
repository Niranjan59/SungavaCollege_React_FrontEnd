import React from 'react';
import './NewAbout.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper";


const NewAbout = () => {
    return (
        <div id="about" className="basic-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Tutors Gallary</h2>
                        <p className="p-heading p-large">Meet our team of specialized marketers and business developers who will help you research new products and launch them in new emerging markets.</p>
                    </div>
                </div>
                <div className="row justify-content-evenly">
                    <div className="col-lg-3">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards, Autoplay]}
                            className="mySwiper"
                            autoplay={{ delay: 3000 }}
                        >
                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>


                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>
                        </Swiper>

                    </div>


                    <div className="col-lg-3">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards, Autoplay]}
                            // slidesPerView={"auto"}
                            className="mySwiper"
                            autoplay={{ delay: 2000 }}
                        >
                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>


                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>
                        </Swiper>

                    </div>



                    <div className="col-lg-3">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards, Autoplay]}
                            className="mySwiper"
                            autoplay={{ delay: 3000 }}
                        >
                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>


                            <SwiperSlide>
                                <img className="img-fluid" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/266094844_460481962085391_2333635291110877543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R_dsMiI8gP4AX8uf88f&_nc_ht=scontent.fktm6-1.fna&oh=00_AfBArP7oH71sPyqS15ZSLCfR7gsoLXeJEnHdToiifeyg6A&oe=646791B2" alt="alternative" />
                                <h5 className='mt-4'>Teacher Name</h5>
                            </SwiperSlide>
                        </Swiper>

                    </div>

                </div>



            </div>
        </div >
    );
};

export default NewAbout;
