import React, { useState, useEffect } from "react";
import "./RandomQuoteGenerator.css";

function RandomQuoteGenerator() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        try {
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.log(error);
        }
    };

    const generateRandomQuote = () => {
        fetchQuote();
    };

    const handleTextToSpeech = () => {
        if ("speechSynthesis" in window) {
            const speech = new SpeechSynthesisUtterance(`${quote} - ${author}`);
            speechSynthesis.speak(speech);
        } else {
            console.log("Text to speech is not supported in this browser.");
        }
    };

    const handleTweet = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `${quote} - ${author}`
        )}`;
        window.open(twitterUrl, "_blank");
    };

    return (
        <div className="quote-generator-container">
            <h2 className="head">Food for Thought</h2>
            <div className="quote-container">
                <p className="quote-text" id="quoteText">{quote}</p>
                <p className="quote-author" id="quoteAuthor">- {author}</p>
            </div>
            <div className="button-container">
                <button className="generate-quote-button" onClick={generateRandomQuote}>Generate Quote</button>
                <button className="read-aloud-button" onClick={handleTextToSpeech}>Read Aloud</button>
                <button className="tweet-button" onClick={handleTweet}>Tweet Quote</button>
            </div>
        </div>
    );
}

export default RandomQuoteGenerator;
