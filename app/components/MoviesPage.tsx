import React from 'react'
import MovieList from './MovieList'
import Navbar from './Navbar'
import Link from 'next/link'
const MoviesPage = async () => {
  return (
    <div className='w-screen bg-black'>
      <MovieList title={{genre:"popular",name:"Popular"}} />
      <MovieList title={{genre:"upcoming",name:"Upcoming"}} />
      <MovieList title={{genre:"top_rated",name:"Top Rated"}} />
      <MovieList title={{genre:"now_playing",name:"Now Playing"}} />
    </div>
  )
}

export default MoviesPage