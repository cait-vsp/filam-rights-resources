import React from 'react';
import "./resourceCards.css";

export default function ResourceCard( {rsrc} ) {
    const holdsLink = rsrc.link && rsrc.link !== "[NONE]"; // checks to see if link exists and not null/empty

    return (
        <article className = "resource-card">
            <header className = "resource-card_Header">
                <h3 className = "resource-card_Title">{rsrc.title}</h3>
                <p className = "resource-card_Organization">{rsrc.org}</p>
            </header>

            <p className = "resource-card_Blurb">{rsrc.blurb}</p>

            <div className = "resource-card_Tags">
                {rsrc.categories && rsrc.categories.length > 0 && (
                    <div className = "resource-card_TagGroup">
                        <span className = "tag-label">
                            Categories:
                        </span>
                        <div className = "tag-list">
                            {rsrc.categories.map((cat) => (
                                <span key = {cat} className = "tag-chip"></span>
                            ))}
                        </div>
                    </div>
                )}
            
                {rsrc.language && rsrc.language.length > 0 && (
                    <div className = "resource-card_TagGroup">
                        <span className = "tag-label">
                            Language:
                        </span>
                        <div className = "tag-list">
                            {rsrc.language.map((lang) => (
                                <span key = {lang} className = "tag-chip"> {lang} </span>
                            ))}
                        </div>
                    </div>
                    )}

                {rsrc.location && rsrc.location.length > 0 && (
                    <div className = "resource-card_TagGroup">
                        <span className = "tag-label">
                            Region:
                        </span>
                        <div className = "tag-list">
                            {rsrc.location.map((locate) => (
                                <span key={locate} className = "tag-chip tag-chip--region">
                                    {locate}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <footer className = "resource-card_Footer">
                {holdsLink ? (
                    <a className = "resource-card_Link" href = {rsrc.link} target = "_blank" rel = "noopener noreferrer">
                        Go To Resource
                    </a>
                ) : (
                    <span className = "resource-card_Link resource-card_LinkDisabled">
                        Contact The Org Directly
                    </span>
                )}
            </footer>
        </article>
    )
}