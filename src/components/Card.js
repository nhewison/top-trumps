import React from 'react';

const Card = ({ title, poster_path, popularity, runtime, revenue, budget, release_date, compareMovieProperty, isShown, onButtonClick }) => {
    // console.log('card', compareMovieProperty)

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const formattedRevenue = revenue && formatNumber(revenue)
    const formattedBudget = budget && formatNumber(budget)

    if (!isShown) {
        return (
            <div class='placeholder'>   
            <p>Nat's Game</p>
            </div>
        )
    }

    return (
        <div className={isShown?'card': 'card placeholder'}>
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
            <p onClick={() => {
                compareMovieProperty("release_date"); 
                if (onButtonClick){
                  onButtonClick()  
                }
                }}>Release Date: {release_date}</p>
            <p onClick={() => {
                compareMovieProperty("popularity");
                if (onButtonClick){
                    onButtonClick()
                }
                }}>Popularity: {popularity}</p>
            <p onClick={() => {
                compareMovieProperty("runtime");
                if (onButtonClick){
                    onButtonClick()
                }
                }}>Runtime: {runtime} mins</p>
            <p onClick={() => {
                compareMovieProperty("budget");
                if (onButtonClick){
                    onButtonClick()
                }
                }}>Budget: ${formattedBudget}</p>
            <p onClick={() => {
                compareMovieProperty("revenue");
                if (onButtonClick){
                    onButtonClick()
                }
                }}> Revenue: ${formattedRevenue}</p>
        </div >
    )};

export default Card

