import React from 'react';
import '../app.css';
import filams from '../Images/Filipino-American-leaders.jpeg'; // Filipino Americans pic



export default function About() // Displays the website's purpose and context.
{
  return(
    <section className = "about_bg">
        <div className ="bg-inner">
             <h1 className = "title"> About This Website </h1>
                <p>
                    This website is for the purpose of making resources 
                    accessible to all Filipino Americans and others who 
                    wish to learn about Filipino American culture, history, and community. 
                    In California, there are people who don't know where to start or who to reach out to, to seek advice and education.
                    But do not feel discouraged, because this disconnection is just the start!
                </p>
                <p>
                    As a community, it is important to engage, educate, and help those around us. 
                    With this website, anyone can access these resources and it's free for all age groups. 
                    No logins, no difficulty in obtaining information, and it's easy to use! 
                </p>
                <p>
                    Try out the search bar, today!
                </p>
                <div> 
                    <img className="filam-img" src = {filams} alt = "Fil-Ams"/>
                </div>
        </div>
     
    </section>

    
  );
}