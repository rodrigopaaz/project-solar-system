import React, { Component } from 'react';
import Proptypes from 'prop-types';
import vector2 from '../images/Vector (2).png';
import vector1 from '../images/Vector (1).png';
import vector from '../images/Vector.png';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="missions" data-testid="mission-card">
        <p
          className="mission_name"
          data-testid="missio
    n-name"
        >
          {name}
        </p>
        <div className="nameYear">
          <p className="mission_year" data-testid="mission-year">
            <img src={ vector2 } alt="vetor2" />
            {year}
          </p>
          <p className="mission_title" data-testid="mission-country">
            <img src={ vector1 } alt="vetor2" />
            {country}

          </p>

          <p className="mission_destination" data-testid="mission-destination">
            <img src={ vector } alt="vetor2" />
            {destination}
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: Proptypes.string,
  year: Proptypes.number,
  country: Proptypes.string,
  destination: Proptypes.string,
}.isRequired;

export default MissionCard;
