import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, onDelete }) {

  const cardsToDisplay = items.map(item=>{
    return <ListingCard 
              key={item.id}
              description = {item.description}
              image={item.image}
              location={item.location}
              myKey={item.id}
              onDelete={onDelete}
            />
  });

  return (
    <main>
      <ul className="cards">
        {cardsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
