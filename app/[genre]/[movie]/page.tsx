import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';
import React from 'react'
interface props{
    params:{
        movie:string;
    }
}
interface element{
    backdrop_path:string,
    genres:[{id:number,name:string}],
    homepage:string,
    id:number,
    imdb_id: number,
    origin_country: [],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: number,
}
interface gen{
    id:number,
    name:string
}
const MoviesDetail = async ({params:{movie}}:props) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjliYTRmZDZhNzQ1ZjBjMDc1ZTBmZWYyOGEzNWM2ZCIsIm5iZiI6MTcyMTA1NDg0Mi40ODM1ODMsInN1YiI6IjY2OTUxZDE0OTdlM2JmYjE5MGE3ZjMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ULPQnmf-mBhJD_sYRc-ihoheHcSngMevD9dOlKPxTyw'
        }
    };
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US`, options)
    const element=await resp.json();
  return (
    <>
        <div className='text-center bg-black text-3xl text-blue-600 p-4 font-bold'>
            <Link href="/">MassMovies...</Link>
        </div>
        <Navbar/>
        {
            (element)? (

            <div className="hero bg-base-200 min-h-fit place-items-start">
            <div className="hero-content flex-col lg:flex-row bg-black text-blue-600">
                <img
                src={"https://image.tmdb.org/t/p/w220_and_h330_face"+element.backdrop_path}
                className="max-w-sm rounded-lg shadow-2xl border-2 border-blue-400" />
                <div>
                    <h1 className="text-5xl font-bold">{element.original_title}</h1>
                    <p className="py-6">{element.overview }</p>
                    <p className='font-medium'>Duration : {element.runtime } min</p>
                    <p className='font-medium'>Release Date : {element.release_date }</p>
                    <div className='font-medium flex'>genre : {element.genres.map((gen:gen,ind:number)=>{
                        return(
                            <div key={ind}>
                            {gen.name},
                            </div>
                        )
                        }) }
                    </div>
                </div>
            </div>
            </div>
        ):<>loading</>
        }
        <Footer/>
    </>
  )
}

export default MoviesDetail

