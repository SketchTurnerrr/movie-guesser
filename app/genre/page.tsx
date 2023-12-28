'use client';

import { type CarouselApi } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Genre } from './GenreItem';
import useMoviesStore from '../zustand/movieStore';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

export default function Page() {
  const { setGenre, genre } = useMoviesStore();
  console.log('genre :', genre);
  const [api, setApi] = useState<CarouselApi>();
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentIdx(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      console.log('current');
      setCurrentIdx(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    switch (currentIdx) {
      case 1:
        setGenre('comedy');
        break;
      case 2:
        setGenre('thriller');
        break;
      case 3:
        setGenre('action');
        break;
      case 4:
        setGenre('drama');
        break;
      case 5:
        setGenre('animation');
        break;
      case 6:
        setGenre('real_events');
        break;
      case 7:
        setGenre('fantasy');
        break;
      default:
        setGenre('comedy');
        break;
    }
  }, [currentIdx]);

  const genres = [
    {
      genreName: 'Фентезі',
      src: '/fantasy.jpg',
    },
    {
      genreName: 'Комедія',
      src: '/comedy.jpg',
    },
    {
      genreName: 'Трилер',
      src: '/thriller.jpg',
    },
    {
      genreName: 'Бойовик',
      src: '/action.jpg',
    },
    {
      genreName: 'Драма',
      src: '/drama.jpg',
    },
    {
      genreName: 'Мульти',
      src: '/animation.jpg',
    },
    {
      genreName: 'На реальних подіях',
      src: '/real_events.jpg',
    },
  ];

  return (
    <div className="bg-foreground h-screen w-screen justify-center items-center flex flex-col gap-10">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-[1200px]"
      >
        <CarouselContent>
          {genres.map((genre) => (
            <CarouselItem className="basis-1/3 " key={genre.genreName}>
              <Genre
                genreName={genre.genreName}
                src={genre.src}
                idx={currentIdx}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Link href={'/'}>
        <Button
          size={'lg'}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-3xl px-16 py-8 text-center me-2 mb-2"
        >
          Далі
        </Button>
      </Link>
    </div>
  );
}
