import React from 'react';
import heroImage from '../assets/img/heros/home.jpg';
import poster from '../assets/img/posters/jan2022.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <span className="fresh-hero__credit">Photo by Bands on Film</span>
        </div>
        <div className="fresh-splash">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img src={poster} alt="Fresh 2022" width="400px" />
              </div>
              <div className="col-12">
                <h1>Buy tickets</h1>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow"
                      href="https://www.ticketweb.uk/event/fresh-colours-hoxton-tickets/11496325?pl=colours"
                    >
                      London
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow"
                      href="http://bit.ly/freshmcr"
                    >
                      Manchester
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow"
                      href="https://hdfst.uk/E68620"
                    >
                      Bristol
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
