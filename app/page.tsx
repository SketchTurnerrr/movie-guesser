'use client';
import Image from 'next/image';
import Timer from '../components/Timer';
import movies from './data/movies';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import useMoviesStore, { IMovie } from './zustand/movieStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const getRandomMovie = (movies: IMovie[]) => {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return randomMovie;
};

export default function Home() {
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
  console.log('movies :', movies);
  // console.log('genre :', genre);
  console.log('guessNumber :', guessNumber);

  const [movie, setMovie] = useState<IMovie | null>(null);
  console.log('movie :', movie);

  useEffect(() => {
    setMovie(() =>
      getRandomMovie(
        movies.filter((movie) => movie.genre === genre && !movie.guessed)
      )
    );
  }, [movies]);

  const handleUpdateGuess = (movieName: string) => {
    updateGuessed(movieName);
  };

  useEffect(() => {
    if (movie && guessNumber > 3) {
      console.log('ran :');
      updateGuessed(movie?.name);
      resetGuessNumber();
    }
  }, [guessNumber]);

  return (
    <main className="flex min-h-screen flex-col bg-foreground items-center justify-between p-24">
      <Link href={'genre'}>
        <Button className="font-bold text-xl bg-amber-400 text-black hover:bg-amber-300">
          Обрати жанр
        </Button>
      </Link>
      <div className="bg-slate-900 p-4 rounded-sm text-zinc-300 max-w-5xl w-full items-center justify-between  text-sm">
        <span>{guessNumber}</span>
      </div>

      <div className="flex flex-col">
        {!movie && <Image src="/oops.jpg" width={1000} height={1000} alt="$" />}
        {movie && guessNumber <= 3 && (
          <Image
            className="relative rounded-md "
            src={movie?.images[guessNumber - 1] || ''}
            alt="Next.js Logo"
            width={2000}
            height={2000}
            priority
          />
        )}

        {movie ? (
          <Button
            onClick={() => setGuessNumber()}
            size="lg"
            className="text-lg bg-zinc-800 my-4 ml-auto"
          >
            Далі
          </Button>
        ) : (
          <Button onClick={refreshPage}>Наново</Button>
        )}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
