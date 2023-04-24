import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCards from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div className="SolarSystem" data-testid="solar-system">
        <section>
          <Title headline="Planetas" />

        </section>
        <div>
          {Planets.map((planetas, i) => (<PlanetCards
            key={ i }
            planetName={ planetas.name }
            planetImage={ planetas.image }
          />))}

        </div>
      </div>
    );
  }
}

export default SolarSystem;
