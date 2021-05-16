import React from 'react';

import heroImage from '../assets/img/heros/error.jpg';

class Error extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>Page not found</h2>
          <span className="fresh-hero__credit">Photo by @gingerdope</span>
        </div>
        <div className="fresh-section">
          <p><a href="/">Go home</a></p>
        </div>
      </div>
    );
  }
}

export default Error;
