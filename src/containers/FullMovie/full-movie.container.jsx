import React, { useEffect, useState } from 'react';

import './full-movie.container.style.css';
import { FullMovie } from "../../components";
import { MoviesService } from '../../services';

export default ({ match : { params: { id } } }) => {
  const [fullMovie, setFullMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const response = await MoviesService.getMovieById(id);
      setFullMovie(response.data);
    };

    getMovie();
  }, [id]);


  return (
    <div>
      {
        fullMovie && <FullMovie data={fullMovie}/>
      }
    </div>
  );
};
