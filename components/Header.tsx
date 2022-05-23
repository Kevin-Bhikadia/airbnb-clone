import React, { useState } from 'react'
import Image from 'next/image'
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/router'

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfguests, setNoOfguests] = useState('1')
  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  // console.log(noOfguests)

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfguests: noOfguests,
      },
    })
  }

  const resetInput = () => {
    setSearchInput('')
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* Left section */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          onClick={() => {
            router.push('/')
          }}
        />
      </div>

      {/* middle section */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value)
          }}
          className="flex-grow bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 outline-none"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      {/* Right section */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2 shadow-sm">
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="col-span-3 mx-auto mt-3 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="mb-4 flex items-center border-b">
            <h1 className="flex-grow text-2xl font-semibold">
              Number of guests
            </h1>
            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg text-red-200 outline-none"
              type="number"
              min={1}
              value={noOfguests}
              onChange={(e) => setNoOfguests(e.target.value)}
            />
          </div>

          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
