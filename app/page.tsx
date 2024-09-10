import Link from 'next/link';
import MoviesPage from './components/MoviesPage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
    <div className='w-screen bg-black'>
      <div className='text-center text-3xl text-blue-600 font-bold p-4'>
      <Link  href="/" >MassMovies...</Link>
      </div>

      <Navbar/>
      <MoviesPage/>
    </div>
    <Footer/>
    </>
  );
}
