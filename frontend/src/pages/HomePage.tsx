
import { useGetMoviesQuery } from '../redux/movieApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useState } from 'react';
import { isLoggedIn } from '../utils/auth';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface Movie {
    id: string;
    title: string;
    description: string;
    posterUrl: string;
    rating: number;
    // ...add other fields from your API
  }

 
const HomePage = () => {
  const { data: movies, error, isLoading } = useGetMoviesQuery(undefined) as {data: Movie[]; isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError};

const navigate = useNavigate();
    const handleMovieClick = (movieId: string) => {
        if (isLoggedIn()) {
          // If logged in, navigate to the movie detail page
          navigate(`/movie/${movieId}`);
        } else {
          // If not logged in, navigate to login/signup page
          navigate('/login');
        }
      };

    const user = useSelector((state: RootState) => state.auth.user);
      
    const [page, setPage] = useState(1);

  if (isLoading) return <p>Loading movies...</p>;
  if (error) return <p>Something went wrong fetching movies 😢</p>;

  const nextPage = () => {
    setPage((prev) => prev + 1); // Go to the next page
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1); // Go to the previous page
    }
  };
  const renderStars = (rating: number) => {
    // Create a star rating system from 1 to 5 stars
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'filled' : 'empty'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="px-4 py-4 bg-blue-ora-400" >
      <h1 className='lg:text-4xl lg:font-bold text-xl font-light text-gray-700'>MovieBoxx</h1>
      <h1 className="lg:text-2xl lg:font-bold text-xl font-light mb-4 text-center text-blue-700">Now Showing at your favorite cinema</h1>
 {/*}     <h2 className='lg:text-6xl lg:font-bold text-3xl font-light text-center mb-5 text-blue-700 text-wrap'>Discover and Book Movies seamlessly on movieboxx</h2>{*/}

      <h1 className='mb-5 text-blue-600'>{user? `Welcome back, ${user.name}` : 'Welcome to MovieBoxx'}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {movies?.map((movie) => (
          <div key={movie.id} className="border p-2 rounded shadow-sm">
            <img src={movie.posterUrl} alt={movie.title} className="w-full h-88 object-cover rounded max-w-sm"  onClick={() => handleMovieClick(movie.id)}/>
            <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
            <p className="text-sm text-blue-900">{movie.description}</p>
            <div className='text-yellow-300 mt-6'>{renderStars(movie.rating)} </div>
          </div>
        ))}
      </div>

      <div>
        <button onClick={prevPage} disabled={page <= 1} className='text-sm'>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default HomePage;
