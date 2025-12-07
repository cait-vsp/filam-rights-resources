import React from 'react';
import {resources} from "../data/resources";
import ResourceCard from "./ResourceCard";
import "./resourceCards.css";

export default function ResourcePage(){ // Meant to display Resource Page with resource cards
    return(
        <section className = "resource-grid">
            {resources.map((rsrc) => (
                <ResourceCard key = {rsrc.id} rsrc = {rsrc} /> 
            )
        )}
        </section>
    );
}