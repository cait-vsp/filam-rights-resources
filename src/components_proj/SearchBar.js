import { useState } from 'react'; // uses useState 
import './searchBar.css';

export default function SearchBar( {onSearch})  
{
    const [input, setInput] = useState(""); // updates every time user types in something

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInput(newValue);
    };

    return (
        <div className = "searchContainer">
            <input type = "text"
                className = "searchInput"
                placeholder = "Search..."
                value = {input}
                onChange = {handleChange}
            />
        </div>
    );
}
