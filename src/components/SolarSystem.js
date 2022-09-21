import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCards from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((planetas, i) => (<PlanetCards
          key={ i }
          planetName={ planetas.name }
          PlanetImage={ planetas.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
