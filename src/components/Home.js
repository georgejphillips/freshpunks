import React from 'react';
import heroImage from '../assets/img/heros/home.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className="fresh-hero fresh-hero--homepage">
        <img src={heroImage} alt="" />
        <span className="fresh-hero__credit">Photo by Bands on Film</span>
      </div>
    );
  }
}

export default Home;
