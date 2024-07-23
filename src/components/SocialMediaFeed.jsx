import React from 'react'

const SocialMediaFeed = () => {
  return (
    <div className='p-container'>
        <div className='mt-7'>
        <h1 className='underline-socialFeed' >Social Media Feeds</h1>

        <div className=' mt-4 flex flex-wrap '>
            <div className='col-6'>
            <div className='col-12 border-1 h-15rem p-0  '>
                <h1 className='bg-darkblue-cont text-white m-0 text-center'>Facebook</h1>

            </div>
            </div>
            <div className='col-6'>
            <div className='col-12 border-1 h-15rem p-0  '>
                <h1 className='bg-darkblue-cont text-white m-0 text-center'>X</h1>

            </div>
            </div>
            <div className='col-6'>
            <div className='col-12 border-1 h-15rem p-0  '>
                <h1 className='bg-darkblue-cont text-white m-0 text-center'>Instagram</h1>

            </div>
            </div>
            <div className='col-6'>
            <div className='col-12 border-1 h-15rem p-0  '>
                <h1 className='bg-darkblue-cont text-white m-0 text-center'>Linkedin</h1>

            </div>
            </div>
           

        </div>


    </div>
    </div>
    
  )
}

export default SocialMediaFeed