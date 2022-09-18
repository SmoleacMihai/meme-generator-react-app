import React from "react";
import memesData from "../memesData";

const Meme = () => {
  // console.log(memesData.data.memes);

  const [currentUrl, setUrl] = React.useState("");

  const handleClick = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setUrl(memesArray[randomNumber].url);
    // console.log(url);
  }

  return (
    <div className="form">
      <div className="form--inputs">
        <input className="form--first-input" type="text" placeholder="Top text"/>
        <input type="text" placeholder="Bottom text"/>
      </div>
      <button onClick={handleClick} className="form--button">Get a new meme image 🖼</button>
      <img src = {currentUrl} alt="Memes"className="meme--image"/>
    </div>
  )
}

export default Meme;