"use client"
import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'
import Image from 'next/image'
import FlipCountdown from '@rumess/react-flip-countdown'
import { BiSolidChevronRight } from "react-icons/bi";


const Enquiry = () => {

    // const[days ,setDays] = useState(0);
    // const[hours , setHours ] = useState(0);
    // const[min , setMin ] = useState(0);
    // const[sec, setSec] = useState(0);
    
    // const deadline = "May , 25,2025";
   

    // const getTime = () =>{
    //     const time =  Date.parse(deadline) - Date.now()
    //     setDays(Math.floor(time/(1000*60*60*24)))
    //     setHours(Math.floor(time/(1000*60*60)%24))
    //     setMin(Math.floor((time/1000/60)%60))
    //     setSec(Math.floor((time/1000)%60))
    // }

 
    // useEffect(()=>{
    //     const interval = setInterval(()=>getTime(deadline),1000)
    //     return ()=> clearInterval(interval)
        
    // })

  return (
    <div className='mt-4  bg-enquiry-color pb-4 ' >
        <div className='p-container'>
       <div >
       <div className="grid  ">
            <div className="sm:col-12 mt-5 md:col-12  lg:col-6">
                    
                <div className='border-1 border-round-xl h-20rem  mr-4 bg-white'>
                    <div className='bg-darkblue text-white text-lg text-center mt-auto py-1 sm:col-12 '>
                        <h2 className='font-light m-0'>Premils Exam Time Remaining</h2>
                    </div>


                    <div className=''>
                    <div className='flex mt-6 gap-1'>
                        <div className='flex align-items-center'>
                        <BiSolidChevronRight className='text-5xl'/>
                        <h3 className='font-large text-3xl m-0'>1st Exam</h3>
                        </div>
                        <div className='flex  '>

                        <FlipCountdown 
                          hideYear
                          hideMonth
                          endAtZero
                          size='small'
                          titlePosition='bottom'
                          endAt={'2026-03-20 01:26:58'}
                        />         
                        </div>
                       
                    </div>
                    <div className='flex mt-6 gap-1'>
                    <div className='flex align-items-center'>
                        <BiSolidChevronRight className='text-5xl'/>
                        <h3 className='font-large text-3xl m-0'>1st Exam</h3>
                        </div>
                        <div className=' flex  '>

                        <FlipCountdown 
                          hideYear
                          hideMonth
                          endAtZero
                          size='small'
                          titlePosition='bottom'
                         endAt={'2026-03-20 01:26:58'}
                        />   
                        </div>
                        
                    </div>

                    </div>
                </div>

                <div className='border-1 border-round-xl h-20rem mt-7 mr-4 bg-white'>
                    <div className='bg-darkblue text-white text-lg text-center mt-auto py-1 '>
                        <h2 className='font-light m-0'>Mains Exam Time Remaining</h2>
                    </div>
                    <div className=''>
                    <div className='flex mt-6 gap-1 '>
                    <div className='flex align-items-center'>
                        <BiSolidChevronRight className='text-5xl'/>
                        <h3 className='font-large text-3xl m-0'>1st Exam</h3>
                        </div>
                        <div className='flex  '>

                        <FlipCountdown 
                          hideYear
                          hideMonth
                          endAtZero
                          size='small'
                          titlePosition='bottom'
                         endAt={'2026-03-20 01:26:58'}
                        />   
                        </div>
                       
                    </div>
                    <div className='flex mt-6 gap-1 '>
                    <div className='flex align-items-center'>
                        <BiSolidChevronRight className='text-5xl'/>
                        <h3 className='font-large text-3xl m-0'>1st Exam</h3>
                        </div>
                        <div className=' flex '>

                        <FlipCountdown 
                          hideYear
                          hideMonth
                          endAtZero
                          size='small'
                          titlePosition='bottom'
                         endAt={'2026-03-20 01:26:58'}
                        />   

                            {/* <div className='text-center'>
                            <h1 class="block m-0">{days<10 ?  +days:days}</h1>
                            <small className='text'>Days</small>
                            </div>


                            <div className='text-center'>
                            <h1 class="block m-0">{hours<10 ?  +hours:hours}</h1>
                            <small className='text'>Hours</small>
                            </div>

                            <div className='text-center'>
                            <h1  class="block m-0">{min<10 ?  +min:min}</h1>
                            <small className='text'>
                                Min
                            </small>
                            </div>

                            <div className='text-center'>
                            <h1 class="block m-0">{sec<10 ?  +sec:sec}</h1>
                            <small className='text'>Sec</small>
                            </div> */}

                        </div>
                        
                    </div>

                    </div>

                </div>
            </div>




            <div className=" border-1 border-round-form p-4 pb-1 flex flex-column justify-content-between bg-white mt-5 md:col-12 col-12 lg:col-6 ">
                 
                <form className='flex flex-column gap-1 justify-content-between '>

                <h2 className=' text-darkblue mt-0 text-center text-4xl'>Enquiry Form</h2>

                <input id="firstname1" type="text"  placeholder='Full Name'   class="text-form text-color surface-overlay p-3 border-1 border-solid surface-border border-round-form-input appearance-none outline-none focus:border-primary w-full mt-3" />

                <input id="email" type="email"  placeholder='Email'   class="text-form text-color surface-overlay p-3 border-1 border-solid surface-border border-round-form-input appearance-none outline-none focus:border-primary w-full mt-3" />

                <input id="number" type="number"  placeholder='Mobile No'   class="text-form text-color surface-overlay p-3 border-1 border-solid surface-border border-round-form-input appearance-none outline-none focus:border-primary w-full mt-3" />

                <input id="select"  placeholder='Select Course'   class="text-form text-color surface-overlay p-3 border-1 border-solid surface-border border-round-form-input appearance-none outline-none focus:border-primary w-full mt-3">
                    {/* <option></option>
                    <option></option> */}
                </input>

                <input id="pincode" type="number"  placeholder='Pin code'   class="text-form text-color surface-overlay p-3 border-1 border-solid surface-border border-round-form-input appearance-none outline-none focus:border-primary w-full mt-3" />

                <textarea id="textarea" type="text"  placeholder='Message'   class="text-form text-color surface-overlay  border-1 border-solid surface-border border-round-form-input appearance-none outline-none focus:border-primary w-full h-7rem mt-3 p-3 " />


                <button type='submit' class=" text-white  border-1 surface-border border-round-form-input appearance-none outline-none focus:border-primary w-full h-4rem mt-3 p-3 bg-darkblue-cont text-4xl bg-darkblue-cont  font-medium">
                    SUBMIT 
                </button>


                </form>

 
            </div>
        </div>


        <div className='w-full bd-download-app flex download-button justify-content-center mt-6 border-1 text-white p-2 grid  col-12 gap-4'>
           
            <div className=' flex justify-content-center'> 
            <i className='pi pi-android text-7xl mr-3' style={{color: 'green' }}></i>

            <div>
            <h1 className='text-4xl font-bold m-0'>Download Our Android App</h1>
            <h3 className='text-xl font-light m-0'>Get full access to our free study materials</h3>

            </div>
               
            </div>
            <div className=' col-3 align-content-center justify-content-center '>
                <button className=' text-darkblue text-4xl border-round-2xl border-none p-2 '> Download Now</button>
            </div>
            
        </div>
       </div>
        </div>
    </div>
  )
}

export default Enquiry