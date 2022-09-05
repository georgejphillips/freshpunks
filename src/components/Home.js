import React from 'react';
import heroImage from '../assets/img/heros/home.jpg';
import poster from '../assets/img/posters/jan2022.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero fresh-hero--homepage">
          <img src={heroImage} alt="" />
          <span className="fresh-hero__credit">Photo by Bands on Film</span>
        </div>
      </div>
    );
  }
}

export default Home;
