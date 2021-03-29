import React from 'react';

import heroImage from '../assets/img/heros/error.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>Page not found</h2>
        </div>
        <div className="fresh-section">
          <p><a href="/">Go home</a></p>
        </div>
      </div>
    );
  }
}

export default Home;
