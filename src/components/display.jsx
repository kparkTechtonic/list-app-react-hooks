import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Display extends PureComponent {
  render() {
    const { pressHistory, currentDisplay } = this.props;
    return (
      <div className="displayDiv">
        <div className="recentPress">
          {pressHistory}
        </div>
        <div className="currentDisplay">
          {currentDisplay}
        </div>
      </div>
    );
  }
}

Display.propTypes = {
  pressHistory: PropTypes.any,
  currentDisplay: PropTypes.any,
};

export default Display;
