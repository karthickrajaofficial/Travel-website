import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

const Testimonial = () => {
  return (
    <div className="testimonial py-16">
      <div className="container mx-auto px-4">
        <div className="row g-4 flex items-center">
          <div className="col-lg-6 wow fadeInLeft">
            <div className="testimonial__slider overflow-hidden">
              <div className="section__header mb-4">
                <span>testimonial</span>
                <h2 className="lg:max-w-[400px]">
                  What Our Customer Say About us
                </h2>
              </div>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                className="swiper-wrapper"
              >
                <SwiperSlide>
                  <div className="testimonial__item">
                    <div className="testimonial__inner">
                      <div className="testimonial__content">
                        <p>
                          Conveniently customize proactive web services for leveraged without
                          continuaery services aggregate fricctionle ou wellies richard.and very
                          aggregate fricctionle ou wellies customize continually.
                        </p>
                        <h5>
                          Sahjahan Sagor. <span className="text-base font-normal">Photographer</span>
                        </h5>
                        <div className="rating">
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial__item">
                    <div className="testimonial__inner">
                      <div className="testimonial__content">
                        <p>
                          Conveniently customize proactive web services for leveraged without
                          continuaery services aggregate fricctionle ou wellies richard.and very
                          aggregate fricctionle ou wellies customize continually.
                        </p>
                        <h5>
                          Rajib Raj. <span className="text-base font-normal">Web Developer</span>
                        </h5>
                        <div className="rating">
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial__item">
                    <div className="testimonial__inner">
                      <div className="testimonial__content">
                        <p>
                          Conveniently customize proactive web services for leveraged without
                          continuaery services aggregate fricctionle ou wellies richard.and very
                          aggregate fricctionle ou wellies customize continually.
                        </p>
                        <h5>
                          Sahjahan Sagor. <span className="text-base font-normal">Photographer</span>
                        </h5>
                        <div className="rating">
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                          <i className="fa-solid fa-star text-[#FA9556]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInRight">
            <div className="testimonial__thumb">
              <img src="testimonial/map.png" alt="travel thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
