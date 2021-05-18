import React, { useState, useEffect } from 'react';
import TitleSection from './TitleSection';
import Card from './Card';
import RulesBox from './RulesBox'; 

const CardWrapper = () => {
    const [movieOne, setMovieOne] = useState({ title: null, popularity: null, runtime: null, revenue: null, poster_path: null });
    const [movieTwo, setMovieTwo] = useState({ title: null, popularity: null, runtime: null, revenue: null, poster_path: null });
    const [result, setResult] = useState(null);
    const [revealCardTwo, setRevealCardTwo] = useState(false)

    const showCardTwo = () => {
        setRevealCardTwo(true)
    }

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

    const refreshPage = () => {
        window.location.reload();
    }

    const compareMovieProperty = (property) => {
        if (property === 'popularity') {
            const gameConditions = {
                "WINNER!": movieOne.popularity > movieTwo.popularity,
                "IT'S A TIE, try again": movieOne.popularity === movieTwo.popularity,
                "LOSER": movieOne.popularity < movieTwo.popularity
            }
            const result = Object.keys(gameConditions).filter(condition => gameConditions[condition])[0]
            setResult(result)
        }
        if (property === 'runtime') {
            const gameConditions = {
                "WINNER!": movieOne.runtime > movieTwo.runtime,
                "IT'S A TIE , try again": movieOne.runtime === movieTwo.runtime,
                "LOSER": movieOne.runtime < movieTwo.runtime
            }
            const result = Object.keys(gameConditions).filter(condition => gameConditions[condition])[0]
            setResult(result)
        }

        if (property === 'revenue') {
            const gameConditions = {
                "WINNER!": movieOne.revenue > movieTwo.revenue,
                "IT'S A TIE, , try again": movieOne.revenue === movieTwo.revenue,
                "LOSER": movieOne.revenue < movieTwo.revenue
            }
            const result = Object.keys(gameConditions).filter(condition => gameConditions[condition])[0]
            setResult(result)
        }

        if (property === 'budget') {
            const gameConditions = {
                "WINNER!": movieOne.budget > movieTwo.budget,
                "IT'S A TIE, , try again": movieOne.budget === movieTwo.budget,
                "LOSER": movieOne.budget < movieTwo.budget
            }
            const result = Object.keys(gameConditions).filter(condition => gameConditions[condition])[0]
            setResult(result)
        }

        if (property === 'release_date') {
            const gameConditions = {
                "WINNER!": movieOne.release_date < movieTwo.release_date,
                "IT'S A TIE, , try again": movieOne.release_date === movieTwo.release_date,
                "LOSER": movieOne.release_date > movieTwo.release_date
            }
            const result = Object.keys(gameConditions).filter(condition => gameConditions[condition])[0]
            setResult(result)
        }
    }

    console.log({ movieOne, movieTwo });

    // console.log(movieOne.release_date)

    return (
        <div className='wrapper'>
                <RulesBox />
            <div className='title-wrapper'><TitleSection /></div>
            <div className='card-wrapper'>
                <Card isShown={true}onButtonClick={showCardTwo} {...movieOne} compareMovieProperty={compareMovieProperty}/>
                <Card isShown={revealCardTwo} {...movieTwo}/>
            </div>
            <div onClick={() => refreshPage()} className='replay'> <p>Play again!</p></div>
            {result && <div className='results'>Result: {result}</div>}
            </div>

    )
};

// use turnery for showing card placeholder 

export default CardWrapper