import {Link} from "react-router-dom";
import React from 'react';

import './movie.style.css';
import {Container} from "@mui/material";
import Box from "@mui/material/Box";

export default ({data}) => (

    <div>
        <Container maxWidth="sm">
            <Box>
                <img className={'img'}
                     src={'https://image.tmdb.org/t/p/w500' + data.poster_path}
                     alt="defaultPhoto"/>
                <h5> {data.title}</h5>
                <Link to={`/${data.id}`}> Open full </Link>
                <hr className={"hr"}/>
            </Box>

        </Container>

    </div>
)