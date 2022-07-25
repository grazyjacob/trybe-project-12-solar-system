import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img
          data-testid="planet-image"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
