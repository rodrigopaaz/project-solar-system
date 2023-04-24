import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div className="mission" data-testid="missions">
        <section>
          <Title headline="Missões" />
        </section>
        <div>
          {missions.map((mission, i) => (<MissionCard
            key={ i }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
