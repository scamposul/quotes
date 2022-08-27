import React from "react";
import { useState } from "react";
import quotes from './quotes.json'



function Button() {
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
      <div className="button">
        <button className="switch" onClick={switchIndex}><i class="fa-solid fa-shuffle"></i></button>
      </div>
    )
  }


export default Button