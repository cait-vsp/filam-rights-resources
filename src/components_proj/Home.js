import React from 'react';
import '../app.css'; // for parallax


export default function Home() // This Home function is meant to hold search bar.
{
  return(
    <section className = "home_bg">
      <div className="bg-inner">
        <h1 className = "title"> Fil-Am Rights and Resources (CA)</h1>
        <p>
          A place to learn about Filipino American rights, history, culture, and community resources!
        </p>
        <p>
          Just type something into the search bar or click on a category from the dropdown.
        </p>
      </div>
      
    </section>
  );
}