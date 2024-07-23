"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "primereact/button";

const Testmonials = () => {
  return (
    <div className="bg-testmonials pt-4 pb-4 ">
      <div className="p-container justify-content-center  ">
      <div className="text-center text-xl justify-content-center align-items-center ">
        <h1>
          Student <span style={{ color: "red" }}>Testmonials</span>
        </h1>
      </div>
      <div className=" justify-content-center text-center align-items-center   ">
        <Swiper
          slidesPerView={7}
          spaceBetween={58}
          centeredSlides = {true}
          roundLengths= {true}
          // freeMode={true}
          loop={true}
          zoom = {true}
          //  pagination={{clickable:true}}
           autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="my-test-swiper"
        >
          <SwiperSlide className="w-max my-swiper-slide ">
            <div className="text-center align-items-center justify-content-center flex flex-column">
              <div className=" border-2 border-yellow-500 border-circle w-max p-1 flex flex-column relative">
                <img
                  className="border-circle w-6rem   object-cover h-6rem"
                  src="/testmonial-img.png"
                  alt="img"
                />
                <img className="m-0 absolute medal-img" src="/medal.png" />
              </div>
              <div className="flex flex-column mt-2">
                <h5 className="m-0 font-medium">YAKSH CHAUDHARY</h5>
                <span className="m-1 text-red-600">AIR 06</span>
                <small className="m-0">2021</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-max my-swiper-slide">
            <div className="text-center align-items-center justify-content-center flex flex-column">
              <div className=" border-2 border-yellow-500 border-circle w-max p-1 flex flex-column relative">
                <img
                  className="border-circle w-6rem   object-cover h-6rem"
                  src="/testmonial-img.png"
                  alt="img"
                />
                <img className="m-0 absolute medal-img" src="/medal.png" />
              </div>
              <div className="flex flex-column mt-2">
                <h5 className="m-0 font-medium">YAKSH CHAUDHARY</h5>
                <span className="m-1 text-red-600">AIR 06</span>
                <small className="m-0">2021</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-max my-swiper-slide">
            <div className="text-center align-items-center justify-content-center flex flex-column">
              <div className=" border-2 border-yellow-500 border-circle w-max p-1 flex flex-column relative">
                <img
                  className="border-circle w-6rem   object-cover h-6rem"
                  src="/testmonial-img.png"
                  alt="img"
                />
                <img className="m-0 absolute medal-img" src="/medal.png" />
              </div>
              <div className="flex flex-column mt-2">
                <h5 className="m-0 font-medium">YAKSH CHAUDHARY</h5>
                <span className="m-1 text-red-600">AIR 06</span>
                <small className="m-0">2021</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-max my-swiper-slide">
            <div className="text-center align-items-center justify-content-center flex flex-column">
              <div className=" border-2 border-yellow-500 border-circle w-max p-1 flex flex-column relative">
                <img
                  className="border-circle w-6rem   object-cover h-6rem"
                  src="/testmonial-img.png"
                  alt="img"
                />
                <img className="m-0 absolute medal-img" src="/medal.png" />
              </div>
              <div className="flex flex-column mt-2">
                <h5 className="m-0 font-medium">YAKSH CHAUDHARY</h5>
                <span className="m-1 text-red-600">AIR 06</span>
                <small className="m-0">2021</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-max my-swiper-slide">
            <div className="text-center align-items-center justify-content-center flex flex-column">
              <div className=" border-2 border-yellow-500 border-circle w-max p-1 flex flex-column relative">
                <img
                  className="border-circle w-6rem   object-cover h-6rem"
                  src="/testmonial-img.png"
                  alt="img"
                />
                <img className="m-0 absolute medal-img" src="/medal.png" />
              </div>
              <div className="flex flex-column mt-2">
                <h5 className="m-0 font-medium">YAKSH CHAUDHARY</h5>
                <span className="m-1 text-red-600">AIR 06</span>
                <small className="m-0">2021</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-max my-swiper-slide">
            <div className="text-center align-items-center justify-content-center flex flex-column">
              <div className=" border-2 border-yellow-500 border-circle w-max p-1 flex flex-column relative">
                <img
                  className="border-circle w-6rem   object-cover h-6rem"
                  src="/testmonial-img.png"
                  alt="img"
                />
                <img className="m-0 absolute medal-img" src="/medal.png" />
              </div>
              <div className="flex flex-column mt-2">
                <h5 className="m-0 font-medium">YAKSH CHAUDHARY</h5>
                <span className="m-1 text-red-600">AIR 06</span>
                <small className="m-0">2021</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-max my-swiper-slide">
            <div className="text-center align-items-center justify-content-center flex flex-column">
              <div className=" border-2 border-yellow-500 border-circle w-max p-1 flex flex-column relative">
                <img
                  className="border-circle w-6rem   object-cover h-6rem"
                  src="/testmonial-img.png"
                  alt="img"
                />
                <img className="m-0 absolute medal-img" src="/medal.png" />
              </div>
              <div className="flex flex-column mt-2">
                <h5 className="m-0 font-medium">YAKSH CHAUDHARY</h5>
                <span className="m-1 text-red-600">AIR 06</span>
                <small className="m-0">2021</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-max my-swiper-slide">
            <div className="text-center align-items-center justify-content-center flex flex-column">
              <div className=" border-2 border-yellow-500 border-circle w-max p-1 flex flex-column relative">
                <img
                  className="border-circle w-6rem   object-cover h-6rem"
                  src="/testmonial-img.png"
                  alt="img"
                />
                <img className="m-0 absolute medal-img" src="/medal.png" />
              </div>
              <div className="flex flex-column mt-2">
                <h5 className="m-0 font-medium">YAKSH CHAUDHARY</h5>
                <span className="m-1 text-red-600">AIR 06</span>
                <small className="m-0">2021</small>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" flex align-items-center justify-content-center mt-7">
        <Button className="border-3 border-round-lg text-xl p-2 border-darkblue text-darkblue  bg-white">
          View More
        </Button>
      </div>

      <div className="lg:col-12 " >
      <div className="grid mt-6 py-4 border-1 border-400 border-round-2xl   ">
        <div className="lg:col-6 md:col-12  col-12    border-solid-1 border-400 mb-4">
          <h1 className=" flex justify-content-center underline-h2 gap-2 mt-3">
            Topper's <span style={{ color: "red" }}>Talk</span>
          </h1>

          <div className="col-12">
          <Swiper
            className="mt-4 w-full p-3  "
            slidesPerView={2}
            spaceBetween={48}
            freeMode={true}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[FreeMode, Pagination, Autoplay]}
            // breakpoints={{
            //   728: {
            //     slidesPerView: 2,
            //     spaceBetween: 30
            //   },
             
            // }}
          >
            <SwiperSlide>
              <div className="" >
                <img
                  src="/topr-talk-img.png"
                  alt="img"
                  className=" w-full toppers-img border-round-2xl"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img
                  src="/topr-talk-img.png"
                  alt="img"
                  className="w-full toppers-img border-round-2xl"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img
                  src="/topr-talk-img.png"
                  alt="img"
                  className="w-full toppers-img border-round-2xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/topr-talk-img.png"
                  alt="img"
                  className="w-full toppers-img border-round-2xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>

        <div className="lg:col-6 md:col-12 col-12 border-solid-2  border-400 text-center ">
          <h1 className=" flex justify-content-center underline-h2 gap-2 mt-3">
            Aspirant's <span style={{ color: "red"  }}> Feedback</span>
          </h1>
          <div className="col-12">
            <Swiper 
              className="w-full"
              slidesPerView={1}
              spaceBetween={48}
              freeMode={true}
              loop={true}
              navigation = {true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[FreeMode, Pagination, Autoplay]}
            >
              <SwiperSlide className="p-8 w-full">
                <div className="  text-center ">
                  <h2 className="m-0 font-normal text-3xl" >
                    “ Great Coaching Institute, All the  Study Material provided to
                    me on  time. They are very attentive for our classes schedule ”
                  </h2>
                  <h2 className="font-semibold text-right mr-7"> - Neha Mittal</h2>


                </div>
              </SwiperSlide>

              <SwiperSlide className="p-8 w-full">
                <div className=" text-center ">
                  <h2 className="m-0 font-normal text-3xl" >
                    “ Great Coaching Institute, All the  Study Material provided to
                    me on  time. They are very attentive for our classes schedule ”
                  </h2>
                  <h2 className="font-semibold text-right mr-7"> - Neha Mittal</h2>


                </div>
              </SwiperSlide>

              <SwiperSlide className="p-8 w-full">
                <div className=" text-center ">
                  <h2 className="m-0 font-normal text-3xl" >
                    “ Great Coaching Institute, All the  Study Material provided to
                    me on  time. They are very attentive for our classes schedule ”
                  </h2>
                  <h2 className="font-semibold text-right mr-7"> - Neha Mittal</h2>


                </div>
              </SwiperSlide>

              <SwiperSlide className="p-8 w-full">
                <div className="  text-center ">
                  <h2 className="m-0 font-normal text-3xl" >
                    “ Great Coaching Institute, All the  Study Material provided to
                    me on  time. They are very attentive for our classes schedule ”
                  </h2>
                  <h2 className="font-semibold text-right mr-7"> - Neha Mittal</h2>


                </div>
              </SwiperSlide>


            </Swiper>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Testmonials;
