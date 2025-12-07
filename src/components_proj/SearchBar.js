import './searchBar.css';

export default function SearchBar({query, onQueryChange})
{
    const handleQuery = (e) => { // Function runs when the user inputs something into the search bar
        onQueryChange(e.target.value); // Event object holds new text
      
    };


    return (
        <div className = "searchContainer">
            <input type = "text"
                className = "searchInput"
                value = {query ?? ""} // Always a valid string
                onChange = {handleQuery}
            />
        </div>
    );
}
