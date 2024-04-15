// RandomQuote.js
import React, { useEffect, useState } from 'react';

function RandomQuote() {
    const [quote, setQuote] = useState({ text: '', author: '' });

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/quotes/random')

            .then(response => response.json())
            .then(data => {
                if(data.text && data.author) {
                    setQuote({ text: data.text, author: data.author });
                } else {
                    console.error('No quote found:', data);
                }
            })
            .catch(error => console.error('Error fetching quote:', error));
    }, []);

    return (
        <div>
            <p>"{quote.text}"</p>
            <cite>- {quote.author}</cite>
        </div>
    );
}

export default RandomQuote;
