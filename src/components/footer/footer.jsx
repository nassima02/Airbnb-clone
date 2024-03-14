import React from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Assistance</h3>
          <NavLink to="#">Centre d'aide</NavLink>
          <NavLink to="#">AirCover</NavLink>
          <NavLink to="#">Lutte contre la discrimination</NavLink>
          <NavLink to="#">Assistance handicap</NavLink>
          <NavLink to="#">Options d'annulation</NavLink>
          <NavLink to="#">J'ai un problème de voisinage</NavLink>
        </div>
        <div className="footer-column">
          <h3>Accueil de voyageurs</h3>
          <NavLink to="#">Mettez votre logement sur Airbnb</NavLink>
          <NavLink to="#">AirCover pour les hôtes</NavLink>
          <NavLink to="#">Ressources pour les hôtes</NavLink>
          <NavLink to="#">Forum de la communauté</NavLink>
          <NavLink to="#">Hébergement responsable</NavLink>
          <NavLink to="#">Participez à un cours gratuit sur l'accueil de voyageurs</NavLink>
        </div>
        <div className="footer-column">
          <h3>Airbnb</h3>
          <NavLink to="#">Newsroom</NavLink>
          <NavLink to="#">Nouvelles fonctionnalités</NavLink>
          <NavLink to="#">Carrières</NavLink>
          <NavLink to="#">Investisseurs</NavLink>
          <NavLink to="#">Cartes cadeaux</NavLink>
          <NavLink to="#">Séjours d'urgence Airbnb.org</NavLink>
        </div>
      </div>
    </section>
  );
}

export default Footer;
