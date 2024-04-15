// RandomQuote.js
import React, { useEffect, useState } from 'react';

function RandomQuote() {
    const [quote, setQuote] = useState({ text: '', author: '' });

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/quotes/random')

        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.text && data.author) {
                setQuote({ text: data.text, author: data.author });
            } else {
                throw new Error('Missing data');
            }
        })
        .catch(error => console.error('Error fetching quote:', error));
}, []);
    return (
        <div>
            <p>"{quote.text || 'Default Quote Text'}"</p>
            <cite>- {quote.author || 'Default Author'}</cite>

        </div>
    );
}

export default RandomQuote;
