import React from 'react'
import TourCard from './TourCard'

const ToursList = ({ list }) => {

  if (!list || list.length === 0) return <h4 className='text-lg'>No tours found...</h4>

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
      {list.map((item) => {
        return <TourCard key={item.id} tour={item} />
      })}
    </div>
  )
}

export default ToursList