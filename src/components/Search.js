import React from "react";

function Search({ searchText, setSearchText, setItems, items }) {

  function handleSubmit(e) {
    e.preventDefault();
    const filteredItems = items.filter(item=>item.description.includes(searchText))
    setItems(filteredItems)
  }

  function handleSearchChange(e){
    setSearchText(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange= {handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
