import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCards extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCards.propTypes = ({
  name: PropTypes.string,
  image: PropTypes.string,
}).isRequired;

export default PlanetCards;
