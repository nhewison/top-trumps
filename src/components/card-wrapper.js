import React,{useState} from 'react';
import LeftCard from './left-card';
import RightCard from './right-card';



const CardWrapper = () => {
    const[movie, setMovie] = useState(undefined);
    const randomMovie1 = Math.floor(Math.random() * 300);

    const randomMovie2 = Math.floor(Math.random() * 300);

    // console.log(randomMovie1);
    // console.log(randomMovie2);

    const fetchRandomMovie = () => {
        const movie = fetch(`https://api.themoviedb.org/3/movie/${randomMovie1}?api_key=b016a65fe230e6e3aa336a2125bbeca0`)
        .then((res) => res.json()) 
        .then((data) => {return data})
        .catch((error) => {return null})
        return movie;
    }

    React.useEffect(() => {
        let movie = fetchRandomMovie();
        console.log(movie)
        if (movie){
            setMovie(movie);
            console.log(movie)
            return () => movie
        }
        else {
            movie = fetchRandomMovie()
        }

        // .then((err) => {throw Error(err.statusText)}) 

    }, [movie])

return (
    <div className='wrapper'>
        <p>hello world</p>
        <LeftCard/>
        <RightCard/>
    </div>
)};

// data.title
// data.popularity
// data.runtime
// data.revenue
// data.poster_path

export default CardWrapper