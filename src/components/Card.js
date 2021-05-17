import React from 'react';

const Card = ({ title, poster_path, popularity, runtime, revenue, budget, release_date }) => {
    console.log('card', title)

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      } 

    const formattedRevenue = revenue && formatNumber(revenue)
    const formattedBudget = budget && formatNumber(budget)

    return (
        <div className='card'>
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
            <p>Release Date: {release_date}</p>
            <p>Popularity: {popularity}</p>
            <p>Runtime: {runtime} mins</p>
            <p>Budget: ${formattedBudget}</p>
            <p>Revenue: ${formattedRevenue}</p>
        </div>
    )};

export default Card