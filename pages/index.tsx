import type { NextPage } from 'next'
import Head from 'next/head'

import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import Footer from '../components/Footer'

const Home: NextPage<PropType> = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          {/* Pull data from server with API*/}
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <h1>
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                />
              </h1>
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className="-ml-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <h1>
                <MediumCard key={img} img={img} title={title} />
              </h1>
            ))}
          </div>
        </section>

        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

interface ExploreDataType {
  img: string
  distance: string
  location: string
}

interface CardsDataType {
  img: string
  title: string
}

interface PropType {
  exploreData: ExploreDataType[]
  cardsData: CardsDataType[]
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )
  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )
  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}

export default Home
