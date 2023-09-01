import React from 'react';
import './Heroes.css';

function Heroes(props) {
    return (

    <section className="card">
    <h2 className="heroes-info">{props.name}</h2>
    <p className="heroes-universe"><span>Вселенная:</span><br/>{props.universe}</p>
    <p className="heroes-alterego"><span>Альтер-эго: </span> <br/>{props.alterego}</p>
    <p className="heroes-occupation"><span>Род деятельности: </span> <br/>{props.occupation}</p>
    <p className="heroes-friends"><span>Друзья: </span> <br/>{props.friends}</p>
    <p className="heroes-superpowers"><span>Суперсила: </span> <br/>{props.superpowers}</p>
    <img className="heroes-url" src={props.url} alt={props.name}></img>
    <p className="heroes-biography"><span>Биография: </span> <br/>{props.info}</p>
    </section>
    );
}

export default Heroes;