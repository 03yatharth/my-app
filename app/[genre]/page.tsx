import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

interface props{
    params:{
        genre:string
    }
}
interface results{
  id:number,
  original_title:string,
  poster_path:string,
  release_date:string,
}
const genre = async ({params:{genre}}:props) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjliYTRmZDZhNzQ1ZjBjMDc1ZTBmZWYyOGEzNWM2ZCIsIm5iZiI6MTcyMTA1NDg0Mi40ODM1ODMsInN1YiI6IjY2OTUxZDE0OTdlM2JmYjE5MGE3ZjMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ULPQnmf-mBhJD_sYRc-ihoheHcSngMevD9dOlKPxTyw'
    }
  };
  
  const res = await fetch('https://api.themoviedb.org/3/movie/'+genre+'?language=en-US&page=1', options)
  const data = await res.json();
  return (
    <>
      <div className='text-center bg-black text-3xl text-blue-600 p-4 font-bold'><Link href="/">MassMovies...</Link></div>
      <Navbar/>
      <div className='flex flex-wrap w-full justify-center bg-black'>
        {data.results.map ((element : results)=>{
          return(
            <Link href={`movie/${element.id}`} key={element.id}>
            <div className='flex-col w-52 m-4 rounded-lg' key={element.id}>
              <img className='w-full h-60 rounded-lg "transition-transform duration-200 ease-in-out transform hover:scale-105 ' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+element.poster_path}></img>
              <div className='text-blue-600 font-bold pt-2 text-center hover:text-red-600'>{element.original_title}</div>
            </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default genre