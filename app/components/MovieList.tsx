import Link from 'next/link';
import { title } from 'process';
import React from 'react'
interface results{
  id:number,
  original_title:string,
  poster_path:string,
  release_date:string,
}
interface props{
  title:{
    name:string,
    genre:string
  }
}
const MovieList = async ({title:{genre:genre,name:name}}:props) => {

  
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
    <div className='bg-inherit w-screen'>
    <div className='font-bold pl-5 pt-2 text-2xl text-green-400'>{name} Movies</div>
    <div className='flex overflow-y-hidden overflow-scroll no-scrollbar scroll'>
      {data.results.map ((element : results)=>{
        return(
          <Link href={`movie/${element.id}`} >
          <div className='flex-col w-52 m-5 flex-shrink-0  rounded-lg ' key={element.id}>
            <img className='w-full  h-60 rounded-lg shadow-[0 35px 60px -15px rgba(255,255 ,255 , 1.3)] transition-transform duration-200 ease-in-out transform hover:scale-105 ' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+element.poster_path}></img>
            <div className='text-blue-600 font-bold pt-2 text-center hover:text-red-600'>{element.original_title}</div>
          </div>
          </Link>
        )
      })}
    </div>
    </div>
  )
}

export default MovieList



