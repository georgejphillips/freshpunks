import React from 'react';
import FreshLogo from '../assets/img/logo.svg';

class Logo extends React.Component {
  render() {
    return (
      <div className="fresh-logo">
        <img width="100px" src={FreshLogo} alt="Fresh" />
      </div>
    );
  }
}

export default Logo;
