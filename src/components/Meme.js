import React from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme((prevObj => {
      return {
        ...prevObj,
        randomImage: allMemes[randomNumber].url
      }
    }))
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(meme)
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <div className="form">
      <div className="form--inputs">
        <input className="form--first-input" name= "topText" type="text" placeholder="Top text" onChange={handleChange}/>
        <input type="text" name= "bottomText" placeholder="Bottom text" onChange={handleChange}/>
      </div>
      <button onClick={handleClick} className="form--button">Get a new meme image 🖼</button>
      <div className="meme">
        <img src = {meme.randomImage} alt="Memes"className="meme--image"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}

export default Meme;