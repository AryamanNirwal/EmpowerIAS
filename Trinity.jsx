import React from "react";
import Image from "next/image";

const Trinity = () => {
  return (
   <div className="p-container">
     <div style={{ width: "100%", display: "flex", marginTop:"30px" }}>
      <div  className="flex justify-content-center align-items-center w-5 image-out ">
        <img src="/trinity-img.png" alt="image" className="w-max h-30rem mr-8 " />
      </div>
      <div style={{ display: "grid" }} className="lg:col-7 ">
        <div className="Trinity_st relative ">
          <div
            style={{
              color: "white",
              
              height: "100%",
             
              backgroundColor: "#05156c",
              borderRadius: "21px 0px 0px 21px",
              textAlign: "center",
              fontWeight:"600",
              
              // clipPath: "polygon(100% 50%, 64% 0, 64% 100%)"
              clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 51%, 0% 0%)"

            }}
            className=" col-4 st-font-size "
            >
            STUDENT FIRST APPROACH
          </div>


          <div
            style={{
              textAlign: "center",
             
              display: "inline",
              padding: "20px",
              fontWeight:"300",
              fontSize: "smaller"
            }}
            className="col-8 "
          >
            <span >
              Click on the question number on the question palette at the right
              of your screen to go to that numbered question directly. Note that
              using this option does NOT save your answer to the current
              question.
            </span>
          </div>
        </div>

        <div className="Trinity_st" style={{marginTop:"0px"}}>
          <div
            style={{
              color: "white",

              height: "100%",
              // padding: "45px 38px 32px 0px ",
              backgroundColor: "#05156c",
              borderRadius: "21px",
              textAlign: "center",
              justifyContent:"center",
           
              fontWeight:"600",
              clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 51%, 0% 0%)"

            }}
            className="col-4 hp-font-size"
          >
           HANDHOLDNG PADAGOGY
          </div>

          <div
            style={{
              textAlign: "center",

              display: "inline",
              padding: "20px",
              fontWeight:"300",
              fontSize: "smaller"
            }}
            className="col-8"
          >
            <span>
              Click on the question number on the question palette at the right
              of your screen to go to that numbered question directly. Note that
              using this option does NOT save your answer to the current
              question.
            </span>
          </div>
        </div>


        <div className="Trinity_st" style={{marginTop:"0px"}}>
          <div
            style={{
              color: "white",

              height: "100%",
              // padding: "36px 30px 44px 14px",
              backgroundColor: "#05156c",
              borderRadius: "21px",
              textAlign: "center",
              fontWeight:"600",
              
              clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 51%, 0% 0%)"

            }}
            className="col-4 ef-font-size"
          >
            EXPERT FACULTIES
          </div>

          <div
            style={{
              textAlign: "center",

              display: "inline",
              padding: "20px",
              fontWeight:"300",
              fontSize: "smaller"
            }}
            className="col-8"
          >
            <span>
              Click on the question number on the question palette at the right
              of your screen to go to that numbered question directly. Note that
              using this option does NOT save your answer to the current
              question.
            </span>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Trinity;
