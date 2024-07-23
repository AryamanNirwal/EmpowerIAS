"use client";
import { Button } from "primereact/button";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Card } from "primereact/card";

const Main = () => {
  return (
    <div className="main-bg-img">
      <div className="p-container">
     <div className="grid">
     <div className="lg:col-12 md:col-12 col-12 justify-content-center align-items-center p-0 ">


     <div className=" Main_container_2">
        <h1 className="Main_h1 h-lp h-tb h-mob">Welcome to EMPOWER IAS</h1>
        <div className="Main_h2_back">
          <h2 className="Main_h2  h2-lp h2-tb h2-mob">Powering Your Dream’s Success</h2>
        </div>
        <div className="Main_h3_back">
          <h3 className="Main_h3 h3-lp h3-tb h3-mob">"Learn from the masters of UPSC"</h3>
        </div>
      </div>



      <div className="Main_Latest_cont   justify-content-center mx-auto lg:col-12 md:col-12 col-12 " style={{ position: "relative" , backgroundColor:"white" }}>
        <div className="Latest_btn_cont  ">
          <button className="Latest_btn "> LATEST COURSE</button>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          //   pagination={{clickable:true}}
          // autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="gap-0"
        >
          <SwiperSlide className="flex align-items-center demo-font" >
            <Image src="/new-img.png" width={54} height={54} alt="new" className="demo-img" />
            <h2  className="demo-font">Demo Notification</h2>
          </SwiperSlide>

          <SwiperSlide className="flex align-items-center demo-font">
            <Image src="/new-img.png" width={54} height={54} alt="new" className="demo-img" />
            <h2 className="demo-font">Demo Notification</h2>
          </SwiperSlide>

          <SwiperSlide className="flex align-items-center demo-font">
            <Image src="/new-img.png" width={54} height={54} alt="new" className="demo-img" />
            <h2 className="demo-font">Demo Notification</h2>
          </SwiperSlide>

          <SwiperSlide className="flex align-items-center demo-font">
            <Image src="/new-img.png" width={54} height={54} alt="new" className="demo-img" />
            <h2 className="demo-font">Demo Notification</h2>
          </SwiperSlide>

          <SwiperSlide className="flex align-items-center demo-font">
            <Image src="/new-img.png" width={54} height={54} alt="new" className="demo-img" />
            <h2 className="demo-font">Demo Notification</h2>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" justify-content-center flex mx-auto flex-main-card lg:col-12"  >
        <div className="card lg:col-6 md:col-12 col-12 ">
          <Card  style={{ backgroundColor: "#e8f4ff" }} className=" border-round-xl ">
            <div className="minus-margin ">
              <div className="justify-content-center align-items-center flex text-base ">
              <h1 className="Empower_h text-2xl sm:text-3xl md:text-4xl lg:text-4xl ">Empower IAS <span style={{color:"red"}}>Offline Course</span></h1>

              </div>
            


              <div style={{ display:"flex",width:"inherit" , gap:"20px", marginTop:"20px"}}>
                <Button
                  label="GS. Pre Cum. Mains Foundation"
                  style={{ fontSize: "23px",  color:"black", width:"70%" , borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px",backgroundColor:"white",  }}
                  outlined
                />
                <Button label="CSAT" outlined style={{ fontSize: "23px", width:"30%" ,  color:"black",borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px",backgroundColor:"white" }} />
              </div>
              <div style={{ display:"flex",width:"inherit" , gap:"20px", marginTop:"20px"}}>
                <Button
                  label="Optional"
                  outlined
                  style={{ fontSize: "23px", width:"50%", color:"black", borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px",backgroundColor:"white" }}
                />
                <Button
                  label="GS Module"
                  outlined
                  style={{ fontSize: "23px", width:"50%",color:"black", borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px",backgroundColor:"white" }}
                />
              </div>
              <div style={{width:"inherit" , display:"flex" , gap:"20px", marginTop:"20px"}}>
                <Button
                  label="Test Series"
                  outlined
                  style={{ fontSize: "23px", width:"50%",color:"black", borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px",backgroundColor:"white" }}
                />
                <Button
                  label="Mentorship"
                  outlined
                  style={{ fontSize: "23px" , width:"50%",color:"black", borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px",backgroundColor:"white" }}
                />
              </div>
            </div>
          </Card>
          <div className="Explore_card_footer">
            Explore Offline Courses
          </div>
        </div>

        <div className="card lg:col-6 md:col-12 col-12  ">

            <Card  style={{ backgroundColor: "#e8f4ff" }}  className=" border-round-xl">
            <div className="minus-margin">
              <div  className="justify-content-center align-items-center flex text-3xl;">
              <h2 className="Empower_h2 text-2xl sm:text-3xl md:text-4xl lg:text-4xl ">Empower IAS  <span style={{color:"red"}}>Online Course</span></h2>

              </div>
              
              <div style={{ display:"flex",width:"inherit" , gap:"20px",color:"black", marginTop:"20px"}}>
                <Button
                  label="GS. Pre Cum. Mains Foundation"
                  style={{ fontSize: "23px" , color:"black", width:"70%",color:"black", borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px",backgroundColor:"white"  }}
                  outlined
                />
                <Button label="CSAT" outlined style={{ fontSize: "23px", width:"30%", color:"black",borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px" ,backgroundColor:"white"}} />
              </div>
              <div style={{ display:"flex",width:"inherit" , gap:"20px", marginTop:"20px"}}>
                <Button
                  label="Optional"
                  outlined
                  style={{ fontSize: "23px", width:"50%", color:"black",borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px",backgroundColor:"white" }}
                />
                <Button
                  label="GS Module"
                  outlined
                  style={{ fontSize: "23px", width:"50%",color:"black", borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px" ,backgroundColor:"white" }}
                />
              </div>
              <div style={{width:"inherit" , display:"flex" , gap:"20px", marginTop:"20px"}}>
                <Button
                  label="Test Series"
                  outlined
                  style={{ fontSize: "23px", width:"50%",color:"black", borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px",backgroundColor:"white" }}
                />
                <Button
                  label="Mentorship"
                  outlined
                  style={{ fontSize: "23px" , width:"50%",color:"black", borderColor:"#3e51b6",border:"2px solid #3e51b6", borderRadius:"12px" ,backgroundColor:"white"}}
                />
              </div>
            </div>

            </Card>
            <div className="Explore_card_footer">
            Explore Online Courses
          </div>

        </div>
      </div>
     </div>
     </div>
      </div>
    </div>
  );
};

export default Main;
