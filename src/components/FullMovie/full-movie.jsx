import React from 'react';

import './full-movie.style.css';

export default ({data}) => {
    console.log(data);
    return (

        <div>
            <div className={'wrapper margin'}>
                <div className={'d-flex'}>
                    <div>
                        <img className={'img2'}
                             src={'https://image.tmdb.org/t/p/w500' + data.poster_path}
                             alt="defaultPhoto"/>
                    </div>
                    <div className={'blockInfo height'}>
                        <div><h5 className={'white'}>"{data.title}"</h5></div>
                        <div className={'white'}> Movie quote:"{data.tagline}"</div>
                        <div className={'white'}>Description: <br/><p className={'white font-size'}>"{data.overview}"</p></div>
                        <div className={' d-flex flex-end justify-content'}>
                            <div>Release date: {data.release_date}</div>
                            <div>Budget: {data.budget}</div>
                            <div>Duration: {data.runtime}</div>
                            <div>Rating: {data.vote_average}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
