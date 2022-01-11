import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallCard-container">
            <img src={ props.imagem } alt={ props.alt} />
            <div>
                <span>{ props.label }</span>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;