import React from 'react';
import {resources} from "../data/resources";
import ResourceCard from "./ResourceCard";
import "./resourceCards.css";

export default function ResourcePage(){
    return(
        <section className = "resource-grid">
            {resources.map((rsrc) => (
                <ResourceCard key = {rsrc.id} rsrc = {rsrc} /> 
            )
        )}
        </section>
    );
}