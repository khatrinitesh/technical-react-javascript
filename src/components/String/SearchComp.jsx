import React, { useState } from 'react';

const SearchComp = () => {

    const [inputText, setInputText] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchIndex, setSearchIndex] = useState(null);
  
    const handleSearch = () => {
      const index = inputText.search(searchTerm);
      setSearchIndex(index);
    };
  return (
    <>
       <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
        placeholder="Enter text"
      />
      <br />
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Enter search term"
      />
      <br />
      <button onClick={handleSearch}>Search</button> 
      {searchIndex !== null ? searchIndex === -1 ? 'no match found' : `found at index ${searchIndex}` : "enter search term and text to search."}
    </>
  );
}

export default SearchComp;
