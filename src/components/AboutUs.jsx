import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-[#F6F6F6] w-full max-w-[1340px] mx-auto px-4 pt-12 '>

        <div className=' grid lg:grid-cols-2  gap-12'>
            {/* left part */}
            <div className='flex-1 text-center lg:text-start pt-16 lg:pt-44'>
                <span className=' bg-gray-300 border rounded-full px-4 py-1'>About us</span>
                <h1 className='mt-4 text-4xl font-bold text-yellow-600'>Creating Customized</h1>
                <h2 className='mt-2 text-black text-4xl font-semibold  '>Plans with Dedicated Teams</h2>
                <p className='mt-8 text-xl  [word-spacing:0.5rem]'>
                    We are focused on three main pillars for your success and satisfaction. Fair-flat Prices, No Lengthy Contracts, and Sales Percentage Model. Our experts keep you in the loop to bring your ideas to executions. Try our ecommerce business support services now!
                </p>
            </div>


            {/* right part */}
            <div className='flex flex-1 border-2 rounded-4xl'>
                <div className='p-8 flex flex-col gap-7'>
        <img className='rounded-4xl object-cover' src="https://spectrumbpo.com/wp-content/uploads/2025/10/sawyer-bengc.webp" alt="" />    
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
  {/* Card 1 */}
  <div className="rounded-2xl flex flex-col items-center border w-[140px] h-[170px]">
    <p className="mt-4 text-3xl font-bold">1000+</p>
    <p className="mt-2 text-2xl font-semibold text-center">
      satisfied <br /> Client
    </p>
  </div>

  {/* Card 2 */}
  <div className="rounded-2xl flex flex-col items-center border w-[140px] h-[170px]">
    <p className="mt-4 text-3xl font-bold">1000+</p>
    <p className="mt-2 text-2xl font-semibold text-center">
      satisfied <br /> Client
    </p>
  </div>

  {/* Card 3 */}
  <div className="rounded-2xl flex flex-col items-center border w-[140px] h-[170px]">
    <p className="mt-4 text-3xl font-bold">1000+</p>
    <p className="mt-2 text-2xl font-semibold text-center">
      satisfied <br /> Client
    </p>
  </div>

  {/* Card 4 */}
  <div className="rounded-2xl flex flex-col items-center border w-[140px] h-[170px]">
    <p className="mt-4 text-3xl font-bold">1000+</p>
    <p className="mt-2 text-2xl font-semibold text-center">
      satisfied <br /> Client
    </p>
  </div>

  {/* Card 5 */}
  <div className="rounded-2xl flex flex-col items-center border w-[140px] h-[170px]">
    <p className="mt-4 text-3xl font-bold">1000+</p>
    <p className="mt-2 text-2xl font-semibold text-center">
      satisfied <br /> Client
    </p>
  </div>

  {/* Card 6 */}
  <div className="rounded-2xl flex flex-col items-center border w-[140px] h-[170px]">
    <p className="mt-4 text-3xl font-bold">1000+</p>
    <p className="mt-2 text-2xl font-semibold text-center">
      satisfied <br /> Client
    </p>
  </div>
</div>

                </div>
            </div>
        </div>
    </div>
  )

}

export default AboutUs