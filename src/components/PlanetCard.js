import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCards extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div className="planetas" data-testid="planet-card">
        <div className="planetImage">

          <p data-testid="planet-name">
            {planetName}
          </p>
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className="PlanetImg"
          />
          <div />
        </div>
      </div>
    );
  }
}

PlanetCards.propTypes = ({
  name: PropTypes.string,
  image: PropTypes.string,
}).isRequired;

export default PlanetCards;
