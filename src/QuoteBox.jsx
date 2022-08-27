import React from "react";
import { useState } from "react";
import quotes from './quotes.json'
import Icon from './Icon'



function QuoteBox() {
    const [index, setIndex] = useState(0);

    const colors = [
        "lightgreen", 
        "lightgray", 
        "beige", 
        "lightblue", 
        "orange", 
        "lightyellow", 
        "brown", 
        ];
        
        const randomColor = Math.floor(Math.random() * colors.length);
        document.body.style = `color: ${colors[randomColor]}; background: ${colors[randomColor]};`;
    
      const switchIndex = () => {
        setIndex(Math.floor(Math.random() * quotes.length));
        }
      
    return (
      <div className="quoteBox">
        <div className="card">
          <Icon />
          <p className="quote">{quotes[index].quote}</p>
          <p className="author">- {quotes[index].author}</p>
        </div>
        <button className="switch" onClick={switchIndex}><i class="fa-solid fa-shuffle"></i></button>

      </div>
    )
  }


export default QuoteBox
