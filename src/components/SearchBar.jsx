import { useState } from "react";
import './SearchBar.css';

const SearchBar = ({onSearch}) => {
   let [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div className="searchbar-container">
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={() => onSearch(id)}>Add</button>
      </div>
   );
}

export default SearchBar;