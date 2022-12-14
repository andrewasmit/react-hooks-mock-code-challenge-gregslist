import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

useEffect(()=>{
  fetch("http://localhost:6001/listings")
  .then(res=>res.json())
  .then(data=>setItems(data))
}, []);

const [items, setItems] = useState([]);
const [searchText, setSearchText] = useState("");

function handleDeleteItem(deletedItemId){
  const newItems = items.filter(item=>item.id !== parseInt(deletedItemId))
  setItems(newItems)
}



console.log(searchText);
// console.log("In App.js", items);
// Return of JSX Components
  return (
    <div className="app">
      <Header  items={items} setItems={setItems} searchText={searchText} setSearchText={setSearchText}/>
      <ListingsContainer onDelete={handleDeleteItem}items={items} />
    </div>
  );
}

export default App;
