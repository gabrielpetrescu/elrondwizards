import React from "react";
import { routeNames } from "routes";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// prettier-ignore

const Banner = () => {
  return (
    <div className="swiper-section container">
        <div id="tsum-tabs">

            <input id="tab1" type="radio" name="tabs" defaultChecked/>
            <label htmlFor="tab1">Collection name</label>

            <input id="tab2" type="radio" name="tabs"/>
            <label htmlFor="tab2">Collection name</label>

            <section id="content1">
                <Swiper
                    spaceBetween={8}
                    slidesPerView={4}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-1.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-2.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-3.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-4.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-1.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-2.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-3.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-4.png" alt="wizard-nft"/>
                    </SwiperSlide>


                </Swiper>
            </section>

            <section id="content2">
                <Swiper
                    spaceBetween={8}
                    slidesPerView={4}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-4.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-3.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-2.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-1.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-4.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-3.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-2.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-1.png" alt="wizard-nft"/>
                    </SwiperSlide>


                </Swiper>
            </section>

        </div>



        <div className="wrapper-bubbles">
            <div className="row our-collection">
                <div className="col-lg-6 d-flex align-items-center">
                    <div>
                        <h2>Our collection</h2>
                        <p>ELROND WIZARDS is a collection of 3,333 Unique NFTs shining on the elrond blockchain</p>
                        <a href="#" className="btn-main">
                            Mint here
                            <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                        </a>
                        <a href="#" className="btn-main-inverted">
                            Mint on Isengard
                            <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 position-relative balls-collection text-center">
                    <img className="img-fluid blob ball-top" src="/ball-top.svg" alt="bubbles"/>
                    <img className="img-fluid blob ball-bottom" src="/ball-bottom.svg" alt="bubbles"/>
                    <img className="img-fluid blob ball-left" src="/ball-left.svg" alt="bubbles"/>
                    <img className="img-fluid blob ball-right" src="/ball-right.svg" alt="bubbles"/>



                    <img className="img-fluid d-block d-md-none" src="/balls-grouped.svg" alt="bubbles"/>
                </div>
            </div>
        </div>


    </div>
  );
};

export default Banner;
