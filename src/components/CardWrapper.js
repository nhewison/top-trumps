import React, { useState, useEffect } from 'react';
import TitleSection from './TitleSection';
import Card from './Card';

const CardWrapper = () => {
    const [movieOne, setMovieOne] = useState({ title: null, popularity: null, runtime: null, revenue: null, poster_path: null });
    const [movieTwo, setMovieTwo] = useState({ title: null, popularity: null, runtime: null, revenue: null, poster_path: null });
    const [result, setResult] = useState(null);

    const randomNumber = () => Math.floor(Math.random() * 300);

    const fetchMovie = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${randomNumber()}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`)
            return await response.json()
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

    const setMovies = async () => {
        setMovieOne(await getMovie())
        setMovieTwo(await getMovie())
    }
    
    useEffect(() => {
        setMovies()
    }, []) 

    const compareMovieProperty = (property) => {
        if (property === 'popularity') {
            const gameConditions = {
                "WIN": movieOne.popularity > movieTwo.popularity,
                "TIE": movieOne.popularity === movieTwo.popularity,
                "LOSER": movieOne.popularity < movieTwo.popularity
            }
            const result = Object.keys(gameConditions).filter(condition => gameConditions[condition])[0]
            setResult(result)
        }
    }

    console.log({ movieOne, movieTwo });
    // console.log(movieOne.title, movieOne.popularity, movieOne.runtime, movieOne.revenue, movieOne.poster_path);
    // console.log(movieTwo.title, movieTwo.popularity, movieTwo.runtime, movieTwo.revenue, movieTwo.poster_path);

    return (
        <div className='wrapper'>
            <div className='title-wrapper'><TitleSection /></div>
            <div className='card-wrapper'>
                <Card {...movieOne} compareMovieProperty={compareMovieProperty}/>
                <Card {...movieTwo}/>
            </div>
            {result && <div>result: {result}</div>}
        </div>
    )
};

// use turnery for showing card placeholder 

export default CardWrapper