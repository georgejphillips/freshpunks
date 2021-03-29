import React from 'react';
import heroImage from '../assets/img/heros/home.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className="fresh-hero fresh-hero--homepage">
        <img src={heroImage} alt="" />
      </div>
    );
  }
}

export default Home;
