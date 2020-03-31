import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';

function App() {
    // const [cardsPlaying, setCardsPlaying] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const [cardTitle, setCardTitle] = useState('');
    const [cardText, setCardText] = useState('');
    const [cardDuration, setCardDuration] = useState(1000);
    const [cards, setCards] = useState([
        {
            id: 0,
            title: 'First Card',
            text: 'Will play first...',
            duration: 500
        },
        {
            id: 1,
            title: 'Second Card',
            text: 'Will play second...',
            duration: 1500
        },
        {
            id: 2,
            title: 'Third Card',
            text: 'Will play third...',
            duration: 2000
        }
    ]);

    function addCard() {
        setCards([
            ...cards,
            {
                id: cards.length,
                title: cardTitle,
                text: cardText,
                duration: cardDuration
            }
        ]);

        setCardText('');
        setCardTitle('');
        setCardDuration(1000);
    }

    function playCard(card, duration) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('done: ', card);
                resolve();
            }, duration);
        });
    }

    function doThing(index = 0) {
        const card = cards[index];

        setCurrentCard(card);

        if (index >= cards.length) {
            console.log('all finished!');
            setCurrentCard(null);
            return;
        }

        playCard(card, card.duration).then(() => {
            doThing(index + 1);
        });
    }

    function playbackCards() {
        doThing();
    }

    return (
        <div id="app">
            <div style={{ marginBottom: '20px' }}>
                <Button onClick={playbackCards}>Playback Cards</Button>
            </div>

            <hr />

            <div id="card-form">
                <div>
                    <label>Title</label>
                    <Input type="text" value={cardTitle} onChange={e => setCardTitle(e.target.value)} />
                </div>

                <div>
                    <label>Text</label>
                    <Input type="text" value={cardText} onChange={e => setCardText(e.target.value)} />
                </div>

                <div>
                    <label>Duration (ms)</label>
                    <Input type="number" value={cardDuration} onChange={e => setCardDuration(e.target.value)} />
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <Button onClick={addCard} primary>
                    Add Card
                </Button>
            </div>

            <hr />

            {currentCard === null && cards.map(card => <Card key={card.id} card={card} />)}

            {currentCard && (
                <div>
                    <h1>Playing...</h1>
                    <Card key={currentCard.id} card={currentCard} />
                </div>
            )}
        </div>
    );
}

export default App;
