import React from 'react';
import '../app.css'; // for parallax


export default function Home()
{
  return(
    <section className = "home_bg">
      <div className="bg-inner">
        <h1 className = "title"> Fil-Am Rights and Resources (CA)</h1>
        <p>
          A place to learn about Filipino American rights, history, culture, and community resources.
        </p>
        <p>
          Try out our search bar and dropdown filter today!
        </p>
      </div>
      
    </section>
  );
}