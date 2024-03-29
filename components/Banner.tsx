import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        className=""
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg ">Not sure where to go? Perfect.</p>
        <button className="cursor-pointer rounded-full bg-white px-10 py-4 text-purple-500 shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition-all duration-300">
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
