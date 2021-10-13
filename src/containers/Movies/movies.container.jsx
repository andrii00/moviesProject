import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';

import './movies.container.style.css';
import { Movie } from '../../components';
import { MOVIES_REQUEST } from "../../redux/action-types";

export default () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(({ movies }) => movies);

  useEffect(() => {
    dispatch({ type: MOVIES_REQUEST })
  }, [dispatch]);

  return (
    <div>
      {
        movies.length && movies.map((movie) => <Movie key={movie.id} data={movie} />)
      }
    </div>
  );
};
