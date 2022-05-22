import React from 'react'
import getStaticProps from '../pages/index'
import Image from 'next/image'

// interface DataType {
//   img: string
//   distance: string
//   location: string
// }

// interface PropType {
//   exploreData: DataType[]
// }

function SmallCard({ img, distance, location }) {
  return (
    <div className="m-2 mt-5 flex transform cursor-pointer items-center space-x-4 rounded-xl transition duration-300 ease-out hover:scale-105 hover:bg-gray-100  ">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image
          className="rounded-lg"
          src={img}
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* right */}
      <div className="">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
