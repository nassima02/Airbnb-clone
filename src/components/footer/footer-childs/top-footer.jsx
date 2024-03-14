import React from "react";

const TopFooter = () => {
    return (
        <footer>
            <div>
                <h3>Des idées pour vos prochaines escapades</h3>
                <ul>
                    <li>Populaire</li>
                    <li>Sur la côte</li>
                    <li>Sports d'hiver</li>
                    <li>Montagnes</li>
                </ul>
            </div>
            <div>
                <h3>Catégories</h3>
                <ul>
                    <li>Activités</li>
                </ul>
            </div>
            <div>
                <h3>Destinations populaires</h3>
                <ul>
                    <li>Aigues-Mortes - Location de maisons de vacances</li>
                    <li>Aix-en-Provence - Locations de vacances</li>
                    <li>Aix-les-Bains - Locations de vacances</li>
                    {/* Ajoutez d'autres destinations ici */}
                </ul>
            </div>
        </footer>
    );
}

export default TopFooter;
