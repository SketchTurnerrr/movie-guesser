'use client';
import Image from 'next/image';
import Timer from '../components/Timer';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import useMoviesStore, { IMovie } from './zustand/movieStore';
import Link from 'next/link';
import { Teams } from '@/components/teams';

const getRandomMovie = (movies: IMovie[]) => {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return randomMovie;
};

export default function Home() {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [showTitle, setShowTitle] = useState(false);
  const [moviesLeft, setMoviesLeft] = useState(0);
  console.log('moviesLeft :', moviesLeft);

  function refreshPage() {
    window.location.reload();
  }
  const {
    movies,
    updateGuessed,
    resetGuessNumber,
    guessNumber,
    genre,
    setGuessNumber,
  } = useMoviesStore();

  useEffect(() => {
    setMovie(() =>
      getRandomMovie(
        movies.filter((movie) => movie.genre === genre && !movie.guessed)
      )
    );
    setMoviesLeft(movies.filter((mv) => mv.genre === genre).length);
  }, [movies]);

  useEffect(() => {
    if (movie && guessNumber > 3) {
      setShowTitle(true);
      const timer = setTimeout(() => {
        console.log('This will run after 3 second!');
        updateGuessed(movie?.name);
        resetGuessNumber();
        setShowTitle(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [guessNumber]);

  function handleNextMovie() {
    setGuessNumber();
  }

  function skip() {
    if (movie) {
      updateGuessed(movie.name);
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-foreground p-[9.4rem]">
      <Button className="w-fit font-bold text-xl mb-10 bg-amber-600  hover:bg-amber-500">
        <Link href={'genre'}>
          Обрати жанр{' '}
          {movies.filter((mv) => mv.genre === genre && !mv.guessed).length}
        </Link>
      </Button>
      <Teams />
      {/* <div className="bg-slate-900 p-4 rounded-sm text-zinc-300 max-w-5xl w-full items-center justify-between  text-sm">
        <span>{guessNumber}</span>
      </div> */}

      <div className="flex flex-col items-center">
        {!movie && <Image src="/folks.jpg" width={1000} height={500} alt="$" />}

        {movie && guessNumber <= 3 && !showTitle ? (
          <Image
            className="relative rounded-md max-w-5xl"
            src={movie?.images[guessNumber - 1] || ''}
            alt="Next.js Logo"
            width={1920}
            height={1080}
            priority
          />
        ) : (
          <div
            className={`${
              !movie ? 'hidden' : ''
            } flex justify-center items-center text-5xl h-[25rem] min-w-[1024px] font-bold text-background`}
          >
            {movie?.name}
          </div>
        )}

        <Button
          variant={'ghost'}
          className="hover:bg-inherit"
          onClick={skip}
        ></Button>
        {movie ? (
          <Button
            disabled={showTitle}
            onClick={handleNextMovie}
            size="lg"
            className="text-lg font-bold bg-amber-600 hover:bg-amber-500 my-4 ml-auto"
          >
            {guessNumber === 3
              ? `Наступний ${genre === 'animation' ? 'мульт' : 'фільм'}`
              : 'Далі'}
          </Button>
        ) : (
          <Button
            className="text-lg bg-amber-600 hover:bg-amber-700 my-4 ml-auto"
            onClick={refreshPage}
          >
            Наново
          </Button>
        )}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
