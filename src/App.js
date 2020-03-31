import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';

function App() {
    const defaultDuration = 3;

    const [currentCard, setCurrentCard] = useState(null);
    const [cardTitle, setCardTitle] = useState('');
    const [cardDuration, setCardDuration] = useState(defaultDuration);
    const [cards, setCards] = useState([
        {
            id: 0,
            title: 'Downward Dog',
            duration: 2000
        },
        {
            id: 1,
            title: 'Upward Dog',
            duration: 3000
        },
        {
            id: 2,
            title: 'Tabletop Pose',
            duration: 2000
        }
    ]);

    function addCard() {
        setCards([
            ...cards,
            {
                id: cards.length,
                title: cardTitle,
                duration: cardDuration * 1000
            }
        ]);

        setCardTitle('');
        setCardDuration(defaultDuration);
    }

    function playbackCards() {
        setNextCard();
    }

    function setNextCard(index = 0) {
        const card = cards[index];

        setCurrentCard(card);

        if (index >= cards.length) {
            setCurrentCard(null);
            return;
        }

        setCard(card.duration).then(() => {
            setNextCard(index + 1);
        });
    }

    function setCard(duration) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), duration);
        });
    }

    return (
        <div id="app">
            <div id="card-form">
                <div className="card-form__field-container">
                    <label>Title</label>
                    <Input type="text" value={cardTitle} onChange={e => setCardTitle(e.target.value)} />
                </div>

                <div className="card-form__field-container">
                    <label>Duration (in seconds)</label>
                    <Input type="number" value={cardDuration} onChange={e => setCardDuration(e.target.value)} />
                </div>
            </div>

            <div className="buttons-container" style={{ marginTop: '20px' }}>
                <Button onClick={addCard} primary>
                    Add Card
                </Button>
                <Button onClick={playbackCards}>Playback Cards</Button>
            </div>

            <hr />

            <div>
                <h1 style={{ marginBottom: '20px' }}>Your Cards</h1>
                <div className="your-cards-container">
                    {currentCard === null && cards.map(card => <Card key={card.id} card={card} />)}
                </div>
            </div>

            {currentCard && (
                <div>
                    <h3>Playing...</h3>
                    <Card key={currentCard.id} card={currentCard} />
                </div>
            )}
        </div>
    );
}

export default App;
