import React, {useState} from "react";


export function DogInfo(props) {
  const [showDogImage, setShowDogImage] = useState(null);

  const ShowMe = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then((result) => setShowDogImage(result.message));
  }

  let dogInfoContent = "";

  if (showDogImage !== null) {
    dogInfoContent = 
    (<div>
      <button className="btnImage" onClick={() => setShowDogImage(null)}>Hide me!</button>
      <p><img className="DogImg" src={showDogImage} alt="A dog"/></p>
      </div>);
  } else {
    dogInfoContent = 
    (<div> <h3 className="Description">{props.dog.breed}</h3>
    <p className="Description">{props.dog.description}</p>
   <p className="Rating">
    {props.dog.rating}
    {props.dog.rating >= 8.7 ? <span role="img" aria-label="Good Rating">👍</span> : <span role="img" aria-label="Bad Rating">👎</span>}
  </p>
  <p className="Analysis">
    
    </p></div>);
  }

  return (
  <div className="MovieInfo">
    <h2 id="nameOfDog">
      {props.dog.name}
      <span className="Star" role="img" aria-label="Favorite">
        {props.dog.favorite && '⭐'}
      <button className="btnImage" onClick={ShowMe}>{(showDogImage === null ? "See me!" : "See more me!")}</button>
      </span>
      </h2>

{dogInfoContent}
        </div>
  )   
}
