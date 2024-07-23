import { Card } from 'primereact/card'
import React from 'react'



const CurrentAffairs = () => {
  return (
    <div className='bg-current-affair pt-3 pb-4'>
        <div className='p-container '>
        <div className='text-center text-xl '> 
        <h1>
            Current <span style={{color:"red"}}>Affairs Corner</span>
        </h1>
        </div>

        <div className=' grid '>
           <div className='col md:col-12 lg:col-4'>
           <Card className=' 
             border-1 relative overflow-hidden mx-h-35rem'>
                <div className='text-center justify-content-center flex '>
                <h3 className=' border-round-3xl m-0 w-max p-2 bg-current-h text-xl font-medium px-4'>Daily Current Affairs</h3>
                </div>
                <div className='absolute daily-article bg-daily-article '>
                    <h5 className='m-2  text-xs pl-3 text-center text-white'> Daily Current Affairs</h5>
                </div>

                <div className='text-left gap-3 flex flex-wrap mt-5 ml-4 text-600'>
                    <div>

                        <div className='flex align-items-center gap-2'>
                        <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                        <h4 className='m-0'>UP-PSC/UP-PCS Test Series</h4>

                        </div>
                        
                        <small className='ml-4'>Starting Date <span className='text-red-600 font-italic'>2024-03-31</span></small>
                    </div>

                    <div>
                        <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UPSC Offline Test Series</h4>
                        </div>
                       
                         <small className='ml-4'>Starting Date <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                    <div>
                        <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UPSC Online Test Series</h4>
                        </div>
                       
                       <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                    <div>
                        <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UP-PSC/UP-PCS Offline Test Series</h4>
                        </div>
                      
                       <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                    <div>
                    <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UP-PSC/UP-PCS Online Test Series</h4>
                        </div>
                      
                       <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                </div>

                <div className='mt-view-btn ml-3'>
                    <button className='bd-download-app text-white p-2 text-xl border-none border-round-xl px-4  font-medium'>View More</button>
                </div>
               
            </Card>
           </div>

           <div className='col md:col-12 lg:col-4'>
           <Card className='   
             border-1 max-h-35rem relative overflow-hidden '>
                <div className='text-center justify-content-center flex '>
                <h3 className=' border-round-3xl m-0 w-max p-2 bg-current-h text-xl font-medium px-4'>Daily Blog</h3>
                </div>
                <div className='absolute daily-blog bg-daily-article '>
                    <h5 className='m-2  text-xs pl-3 text-center text-white'> Daily Blog</h5>
                </div>

                <div className='text-left gap-3 flex flex-wrap mt-5 ml-4 text-600'>
                    <div >

                        <div className='flex align-items-center gap-2'>
                        <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                        <h4 className='m-0'>UP-PSC/UP-PCS Test Series</h4>

                        </div>
                        
                        <small className='ml-4'>Starting Date <span className='text-red-600 font-italic'>2024-03-31</span></small>
                    </div>

                    <div>
                        <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UPSC Offline Test Series</h4>
                        </div>
                       
                         <small className='ml-4'>Starting Date <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                    <div>
                        <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UPSC Online Test Series</h4>
                        </div>
                       
                       <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                    <div>
                        <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UP-PSC/UP-PCS Offline Test Series</h4>
                        </div>
                      
                       <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                    <div>
                    <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UP-PSC/UP-PCS Online Test Series</h4>
                        </div>
                      
                       <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>
                    <div>
                    <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UP-PSC/UP-PCS Test Series</h4>
                        </div>
                      
                       <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>
                    <div>
                    <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UP-PSC/UP-PCS Test Series</h4>
                        </div>
                      
                       {/* <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small> */}
                    </div>

                </div>

                <div className='mt-blog-view-btn ml-3'>
                    <button className='bd-download-app text-white p-2 text-xl border-none border-round-xl px-4  font-medium'>View More</button>
                </div>
               
            </Card>
           </div>

            <div className='col md:col-12 lg:col-4'>
            <Card className='  
             border-1 max-h-35rem relative overflow-hidden'>
            <div className='text-center justify-content-center flex '>
                <h3 className=' border-round-3xl m-0 w-max p-2 bg-current-h text-xl font-medium px-4'>Daily Prelims Test</h3>
                </div>
                <div className='absolute daily-article bg-daily-article '>
                    <h5 className='m-2  text-xs pl-3 text-center text-white'> Daily Prelims Test</h5>
                </div>

                <div className='text-left gap-3 flex flex-wrap mt-5 ml-4 text-600'>
                    <div >

                        <div className='flex align-items-center gap-2'>
                        <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                        <h4 className='m-0'>UP-PSC/UP-PCS Test Series</h4>

                        </div>
                        
                        <small className='ml-4'>Starting Date <span className='text-red-600 font-italic'>2024-03-31</span></small>
                    </div>

                    <div>
                        <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UPSC Offline Test Series</h4>
                        </div>
                       
                         <small className='ml-4'>Starting Date <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                    <div>
                        <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UPSC Online Test Series</h4>
                        </div>
                       
                       <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                    <div>
                        <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UP-PSC/UP-PCS Offline Test Series</h4>
                        </div>
                      
                       <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                    <div>
                    <div className='flex align-items-center gap-2'>
                            <i className='pi pi-check-circle' style={{color:"#3f5b73" }}></i>
                            <h4 className='m-0'>UP-PSC/UP-PCS Online Test Series</h4>
                        </div>
                      
                       <small  className='ml-4'>Starting Date  <span className='text-red-600 font-italic'>2024-04-14</span></small>
                    </div>

                </div>

                <div className='mt-view-btn ml-3'>
                    <button className='bd-download-app text-white p-2 text-xl border-none border-round-xl px-4  font-medium'>View More</button>
                </div>
            </Card>
            </div>

        </div>

        <div className='bg-darkblue-cont w-full border-round-2xl mt-3 p-3'>
            <div className='ml-5'>
                <h1 className='text-white m-0 font-medium '>Need more help or have any doubts?</h1>
                <button className='text-blue-Call text-3xl border-round-2xl border-none p-2 px-5 text-center font-medium  mt-3'>Call on 8081300200</button>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default CurrentAffairs