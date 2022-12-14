import React, { useState } from "react";

function ListingCard({ description, image, location, myKey, onDelete }) {

const [isLiked, setIsLiked] = useState(true);

function likeClickHandler(){
  setIsLiked(!isLiked);
}

function deleteHandler(e){
  onDelete(e.target.id)
  fetch(`http://localhost:6001/listings/${e.target.id}`,{
    method: "DELETE"
  })
  .then(res=>res.json())
  .then(()=>console.log('Deleted!'))
}


  // Return of JSX
  return (
    <li  className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={likeClickHandler} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={likeClickHandler} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={deleteHandler} id = {myKey} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
