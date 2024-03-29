import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image className="rounded-2xl" src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-grow flex-col pl-5">
        <div className="flex justify-between">
          <p className="">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="w-10 border-b pt-2" />

        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>

        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
              <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
              <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
