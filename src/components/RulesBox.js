import React from 'react';

const RulesBox = ({ setRulesIsShown }) => {
        
    return (
        <div className='rules-window'>
            <div className='rules-box'>
                <a onClick={() => setRulesIsShown(false)} href="#" className='close-pop-up'>x</a>
                <div className='rules-list'>
                    <h1>Nat's Game: How to play.</h1>
                    <p>Read your Movie Card.</p>
                    <p>Pick your highest/best attribute.</p>
                    <p>If it beats the other card, you win!</p>
                    <p>If its a tie, or you lose, play again.</p>
                    <p>Tip: For Release Date, the earlier the better.</p>
                </div>
            </div>
        </div>
    )};

export default RulesBox