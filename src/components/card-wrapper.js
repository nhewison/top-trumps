import React, { useState, useEffect } from 'react';
import LeftCard from './left-card';
import RightCard from './right-card';


const CardWrapper = () => {
    const [movieOne, setMovieOne] = useState(undefined);
    const [movieTwo, setMovieTwo] = useState(undefined);

    const randomNumber = () => Math.floor(Math.random() * 300);

    const fetchMovie = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${randomNumber()}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`)
            const data = await response.json()
            return data
        }
        catch (error) {
            return console.log(error)
        }
    }

    const getMovie = async () => {
        const fetchedData = await fetchMovie();
        const hasRequiredFields = Boolean(fetchedData.title && fetchedData.popularity && fetchedData.runtime && fetchedData.revenue && fetchedData.poster_path)
        if (hasRequiredFields) return fetchedData;
        return await getMovie()
    }

    useEffect(() => {
        const setMovies = async () => {
            setMovieOne(await getMovie())
            setMovieTwo(await getMovie())
        }
        setMovies()
    }, [])

    console.log({ movieOne, movieTwo })
    return (
        <div className='wrapper'>
            <p>hello world</p>
            <LeftCard />
            <RightCard />
        </div>
    )
};

export default CardWrapper