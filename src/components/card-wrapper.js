import React, { useState } from 'react';
import LeftCard from './left-card';
import RightCard from './right-card';

const CardWrapper = () => {
  const [movie, setMovie] = useState(undefined);
  const randomMovie1 = Math.floor(Math.random() * 300);

  const randomMovie2 = Math.floor(Math.random() * 300);

  // console.log(randomMovie1);
  // console.log(randomMovie2);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${randomMovie1}?api_key=b016a65fe230e6e3aa336a2125bbeca0`,
      );

      const movieResponse = await response.json();
      setMovie(movieResponse);
    } catch (error) {
      fetchMovie();
    }
  };

  React.useEffect(() => {
    fetchMovie();

    if (movie) {
      return () => movie;
    }
  }, [movie, fetchMovie]);

  return (
    <div className="wrapper">
      <p>hello world</p>
      <LeftCard />
      <RightCard />
    </div>
  );
};

// data.title
// data.popularity
// data.runtime
// data.revenue
// data.poster_path

export default CardWrapper;
