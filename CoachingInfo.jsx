import React from "react";

const CoachingInfo = () => {
  return (
    
   <div >
     <div className="p-container">
      <div className="grid mt-7">
      <div className="sm:col-12    md:col-12  lg:col-7  col-12 sm:pr-7">
        <h1 className="font-semibold">Best Coaching for UPSC preparation in India</h1>
        <div className="text-left font-light">
        <span>
          Institute is the best coaching institute for the preparation of UPSC
          exams and will help you achieve your dream designation of IAS, IPS,
          IRS and others. UPSC exam is not a sprint but a marathon and you need
          a companion who can run along you and provide you the guided
          motivation to crack all the stages such as Prelims, Mains and
          Interview. Our distinct training modules, educational research,
          interactive learning methods, highly qualified and experienced staff
          with innovative teaching styles and technology make us a unanimous
          choice of a large number of IAS aspirants.
        </span>

        </div>
        <div className='mt-1 ml-3 flex justify-content-between align-items-baseline '>
        <h4 className="font-light text-lg m-0 mt-4 w-max w-9">Currently we are offering both online/offline courses:</h4>
           <button className='bd-download-app text-white p-2 text-xl border-none border-round-xl px-2 font-medium w-3'>View More</button>
        </div>

      </div>

      <div className="lg:col-5  md:col-12  sm:col-12    p-6"> 
        <div className="flex flex-wrap row-gap-5">

          <div className="flex align-items-center justify-content-center w-4">
          <img  src="/twitter.png" alt="X"  className="max-w-4rem  max-h-4rem" />

          </div>

          <div className="flex align-items-center justify-content-center w-4">
          <img  src="/facebook.png" alt="X" className="max-w-4rem  max-h-4rem"   />
       
          </div>

          <div className="flex align-items-center justify-content-center w-4">
          <img src="/instagram.png" alt="X" className="max-w-4rem  max-h-4rem"  />
          </div>

          <div className="flex align-items-center justify-content-center w-4">
          <img  src="/linkedin.png" alt="X" className="max-w-4rem  max-h-4rem"  />

          </div>

          <div className="flex align-items-center justify-content-center w-4">
          <img  src="/youtube.png" alt="X" className="max-w-4rem  max-h-4rem"  />

          </div>

          <div className="flex align-items-center justify-content-center w-4">
          <img  src="/whatsapp.png" alt="X" className="max-w-4rem  max-h-4rem"  />

          </div>



        </div>
      </div>

      <div className="w-full justify-content-center   ">
        <h1 className="justify-content-center flex">Demo <span style={{color:"red", marginLeft:"3px"}}>Lecture</span></h1>

        <div className="grid  justify-content-center gap-4 mt-6 md:col-9 lg:col-12">
          <div className=" flex  justify-content-center grid pl-5">

            <div className="lg:col-3 md:col-4 sm:col-6 col-12">
                <img src="/yt-lec-img.png" alt="yt"  className="border-round-2xl  w-full "/>
            </div>
            <div  className="lg:col-3 md:col-4 sm:col-6 col-12">
                <img src="/yt-lec-img.png" alt="yt"  className="border-round-2xl w-full "/>
            </div>
            <div  className="lg:col-3 md:col-4 sm:col-6 col-12">
                <img src="/yt-lec-img.png" alt="yt"  className="border-round-2xl w-full "/>
            </div>
            <div  className="lg:col-3 md:col-4 sm:col-6 col-12">
                <img src="/yt-lec-img.png" alt="yt"  className="border-round-2xl w-full"/>
            </div>

           
           
     
          <div  className="lg:col-3 sm:col-6 col-12"> 
                <img src="/yt-lec-img.png" alt="yt"  className="border-round-2xl w-full"/>
            </div>
            <div  className="lg:col-3 sm:col-6 col-12">
                <img src="/yt-lec-img.png" alt="yt"  className="border-round-2xl w-full"/>
            </div>
            <div  className="lg:col-3 sm:col-6 col-12">
                <img src="/yt-lec-img.png" alt="yt"  className="border-round-2xl w-full"/>
            </div>
            <div  className="lg:col-3 sm:col-6 col-12">
                <img src="/yt-lec-img.png" alt="yt"  className="border-round-2xl w-full"/>
            </div>
          </div>

        </div>
      </div>


    </div>
    </div>
   </div>
  );
};

export default CoachingInfo;
