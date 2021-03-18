import React from 'react';
import './App.css';

function App() {
    const [userName, setUserName] = React.useState('');
    const [userAge, setUserAge] = React.useState('');
    const [reviewReferrer, setReviewReferrer] = React.useState(false);
    const [reviewText, setReviewText] = React.useState('')

    function formSubmit(e) {
        e.preventDefault()
        console.log(`
        Name: ${userName}
        Age: ${userAge}
        Found: ${reviewReferrer}
        Text: ${reviewText}
        `)
    }

    return (
        <>
            <form onSubmit={formSubmit}>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="user-name">Naam:
                        <input
                            type="text"
                            name="user-name"
                            id="user-name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="user-age">Leeftijd:
                        <input
                            type="text"
                            name="user-age"
                            id="user-age"
                            value={userAge}
                            onChange={(e) => setUserAge(e.target.value)}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Jouw review</legend>
                    <label htmlFor="review-found">Hoe heb je dit recept gevonden?
                        <select required
                            name="review-found"
                            id="review-found"
                            value={reviewReferrer}
                            onChange={(e) => setReviewReferrer(e.target.value)}
                        >
                            <option hidden defaultValue>Kies een optie</option>
                            <option value="google">Google</option>
                            <option value="friend">Vriend</option>
                            <option value="advertisement">Advertentie</option>
                            <option value="other">Anders</option>
                        </select>
                    </label>
                    <label htmlFor="review-text">Opmerking:
                        <textarea
                            name="review-text"
                            id="review-text"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            cols="40"
                            rows="4"
                            placeholder="Wat vond je van het recept?"
                        >
                        </textarea>
                    </label>
                    <button
                        type="submit"
                        disabled={!reviewReferrer}
                    >
                        Versturen
                    </button>
                </fieldset>
            </form>
        </>
    );
}

export default App;
