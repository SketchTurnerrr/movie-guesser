import { create } from 'zustand';
import movies from '../data/movies';

export interface IMovie {
  genre: string;
  name: string;
  images: string[];
  guessed: boolean;
}

export interface MoviesState {
  movies: typeof movies;
  currentMovie: IMovie | null;
  genre: string | null;
  guessNumber: number;
  updateGuessed: (movieName: string) => void;
  setGuessNumber: () => void;
  resetGuessNumber: () => void;
  setGenre: (genre: string) => void;
}

const useMoviesStore = create<MoviesState>()((set) => ({
  movies: movies,
  currentMovie: null,
  genre: 'comedy',
  guessNumber: 1,
  resetGuessNumber: () =>
    set((state) => ({
      guessNumber: 1,
    })),
  setGuessNumber: () =>
    set((state) => ({
      guessNumber: state.guessNumber === 4 ? 1 : state.guessNumber + 1,
    })),
  updateGuessed: (movieName: string) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.name === movieName ? { ...movie, guessed: true } : movie
      ),
    })),
  setGenre: (genre: string) =>
    set((state) => ({
      genre: genre,
    })),
}));

export default useMoviesStore;
