import React from 'react';
import '../app.css';
import angelopfp from '../Images/pfp_png_bg_hidden-min.png';
import caitlinpfp from '../Images/caitlin_pfp.png';


export default function Contact()
{
  return(
    <section className = "contact_bg">
        <div className = "bg-inner">
            <h1 className = "title"> Contact Us </h1>
                <p>
                    Contact us here!
                </p>
            <div className = "profile-container">
                <img className="profile-img" src = {angelopfp} alt = "Angelo's pfp"/>
                <h2> Angelo Cabreza </h2>
                <p> Angelo is a Filipino American who graduated in California State University, Long Beach 
                    with a Bachelor of Arts in Studio Art. Right now, he is currently doing art commissions, handling 
                    various jobs, and is working on multiple projects. He is also open to any art commissions, so feel free
                    to email him anytime!</p>
                <p> Business Email: Lo2cbusiness@gmail.com</p>
                <p> Twitch: <a href = "https://www.twitch.tv/lo2yuu" target = "_blank" rel = "noopener noreferrer">Lo2yuu</a>
                </p> 
            </div>

            <div className = "profile-container">
                <img className="profile-img" src = {caitlinpfp} alt = "Caitlin's pfp"/>
                <h2> Caitlin San Pedro </h2>
                <p> Caitlin is a Filipina American who is currently a student at California State University, Fullerton and
                    will be graduating with a Bachelor of Science in Computer Science and a minor in Psychology. She is currently
                    volunteering as a member in the Planning Committee for the City of Irvine's 2026 Lunar New Year Parade. 
                </p>
                <p> Business Email: sanpedro_caitlin@yahoo.com</p>
                <p> LinkedIn: <a href = "https://www.linkedin.com/in/cait-vsp/" target = "_blank" rel = " noopener noreferrer">Caitlin's Profile</a></p>
            </div>
        </div>
      
    </section>  
  );
}