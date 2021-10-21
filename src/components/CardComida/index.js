import React from 'react';
import './styles.css';

export default function CardComida ({image, altbox, recipe}) {
        return (
        <div className="box">
                    <img src={image} alt={altbox} className="size-recipe"/>
                    <div className="conteudo-box">
                        <h1>{recipe}</h1>
                        <button className="button-recives">See Recipe</button>
                    </div>
                </div>
        );
}