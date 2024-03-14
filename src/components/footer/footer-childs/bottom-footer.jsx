import React from "react";
import { NavLink } from 'react-router-dom';

const BottomFooter = () => {
    return (
        <footer>
            <div>
                <p>© 2024 Airbnb, Inc.</p>
                <nav>
                    <ul>
                        <li><NavLink to="#">Confidentialité</NavLink></li>
                        <li><NavLink to="#">Conditions générales</NavLink></li>
                        <li><NavLink to="#">Plan du site</NavLink></li>
                        <li><NavLink to="#">Fonctionnement du site</NavLink></li>
                        <li><NavLink to="#">Infos sur l'entreprise</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div>
                <p>Sélectionnez une langue</p>
                <select>
                    <option>Français (FR)</option>
                    {/* Autres langues peuvent être ajoutées ici */}
                </select>
            </div>
            <div>
                <p>Sélectionnez une devise</p>
                <select>
                    <option>€ EUR</option>
                    {/* Autres devises peuvent être ajoutées ici */}
                </select>
            </div>
        </footer>
    );
}

export default BottomFooter;



