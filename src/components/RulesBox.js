import React from 'react';

const RulesBox = () => {

    const rulesBoxPopUp = document.querySelector('.rules-window')
        
    return (
        <div className='rules-window'>
            <a onClick={() => {
                rulesBoxPopUp.classList.add('hidden');
            }} href="#" class='close-pop-up'>x</a>
            <div className='rules-list'>
            <h1>Nat's Game: How to play.</h1>
            <p>Read your Movie Card.</p>
            <p>Pick your highest/best attribute.</p>
            <p>If it beats the other card, you win!</p>
            <p>If its a tie, or you lose, play again.</p>
            </div>
        </div>
    )};

export default RulesBox