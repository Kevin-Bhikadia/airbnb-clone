import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'

function Search({ searchResults }) {
  const router = useRouter()
  const { location, startDate, endDate, noOfguests } = router.query

  const formmattedStartDate = format(
    new Date(startDate as string),
    'dd MMMM yy'
  )
  const formmattedEndDate = format(new Date(endDate as string), 'dd MMMM yy')
  const range = `${formmattedStartDate} - ${formmattedEndDate}`
  // console.log(searchResults)

  return (
    <div className="">
      <Header placeholder={`${location} | ${range} | ${noOfguests} guests`} />

      <main className="flex">
        {/* Left-section */}
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ stays - {range} - for {noOfguests} guest/s
          </p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                title={item.title}
                location={item.location}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        {/* Right-section */}
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults: searchResults,
    },
  }
}

export default Search
