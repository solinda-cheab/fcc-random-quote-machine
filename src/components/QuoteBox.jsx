import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { quotes } from "../data/quotes";

export default function QuoteBox() {
  const randomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  const [quote, setQuote] = useState(randomQuote());

  function newQuote() {
    let next = randomQuote();

    while (next.id === quote.id) {
      next = randomQuote();
    }

    setQuote(next);
  }

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  return (
    <div id="quote-box">
      <h2 id="text">"{quote.text}"</h2>

      <p id="author">- {quote.author}</p>

      <div className="buttons">
        <a
          id="tweet-quote"
          href={tweetURL}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>

        <button id="new-quote" onClick={newQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}