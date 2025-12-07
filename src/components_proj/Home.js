import {useState, useMemo} from 'react';
import '../app.css'; // for parallax
import SearchBar from './SearchBar';
import ResourceCard from "./ResourceCard";
import {resources} from '../data/resources';


export default function Home() // This Home function is meant to hold search bar.
{

  // Stores and updates typed text in search bar
  const [query, setQuery] = useState(" ");

  // Allows useMemo to save the calculated result 
  const filterResrc = useMemo(() => {
    const q = query.trim().toLowerCase();

    if(!q){ // Checks if search bar is empty before it returns all resource cards

      return resources;

    }

    return resources.filter((rsrc) => { // Allows filtering of the resources list
      
      const groupText = [ // Gathers more than one field into a string that's searchable
        rsrc.title, rsrc.blurb, rsrc.org, ...(rsrc.location || []), ...(rsrc.categories || []), ...(rsrc.language || [])]
      
        .filter(Boolean) // Removes null
        .join(" ") // Joins all strings together
        .toLowerCase(); // Makes search no longer case-sensitive

        return groupText.includes(q); // Checks if the joined strings holds the query that user is searching for
    });

  }, [query]);


  return(
    <section className = "home_bg">
      <div className="bg-inner">
        <h1 className = "title"> Fil-Am Rights and Resources (CA)</h1>
        <p>
          A place to learn about Filipino American rights, history, culture, and community resources!
        </p>
        <p>
          Just type in a keyword, the name of an organization, a city/region, a category, and/or a language, into the search bar.
        </p>
        <SearchBar query = {query} onQueryChange={setQuery}/>

        <section className = "resource-grid">
          {filterResrc.length > 0 ? (
            filterResrc.map((rsrc) => (
              <ResourceCard key = {rsrc.id} rsrc = {rsrc}/>
            ))
          
          ) : ( <p style = {{marginTop: "2rem", textalign: "center"}}>
            No matched resources found when searched. Try another keyword.
          </p>

          )}
        </section>
      </div>
      
    </section>
  );
}