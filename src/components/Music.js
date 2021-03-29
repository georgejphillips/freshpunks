import React from 'react';

import heroImage from '../assets/img/heros/music.jpg';
import withdraw from '../assets/img/music/withdraw.jpg';
import st from '../assets/img/music/st.jpg';
import daytime from '../assets/img/music/daytime.jpg';

class Music extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>Music</h2>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h3>Albums</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h4>Withdraw</h4>
                <p>Released 2019 - Specialist Subject Records</p>
                <h5>Links</h5>
                <ul>
                  <li>Spotify</li>
                  <li>Bandcamp</li>
                </ul>
              </div>
              <div class="col-md-4">
                <img src={withdraw} width="100%" alt="Withdraw album artwork" />
              </div>
              <div class="col-md-6">
                <ol>
                  <li>Withdraw</li>
                  <li>Nervous Energy</li>
                  <li>Going to Brighton</li>
                  <li>Willa</li>
                  <li>No Thanks</li>
                  <li>New Girl</li>
                  <li>In Over My Head</li>
                  <li>Getting Ready</li>
                  <li>Punisher</li>
                  <li>Nothing</li>
                  <li>Revenge</li>
                  <li>Reprise</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h4>Fresh</h4>
                <p>Released 2017 - Specialist Subject Records</p>
                <h5>Links</h5>
                <ul>
                  <li>Spotify</li>
                  <li>Bandcamp</li>
                </ul>
              </div>
              <div class="col-md-4">
                <img src={st} width="100%" alt="Fresh album artwork" />
              </div>
              <div class="col-md-6">
                <ol>
                  <li>Short Hair, Don't Care</li>
                  <li>Get Bent</li>
                  <li>Bible Camp</li>
                  <li>I'll Be back</li>
                  <li>Fuck My Life</li>
                  <li>Passing</li>
                  <li>Wish You Were Here</li>
                  <li>Six Months</li>
                  <li>Goodbye Suckers</li>
                  <li>Lead Ashtray</li>
                  <li>No Big Deal</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h3>Singles & EPs</h3>
              </div>
            </div>
          </div>
          <div className="fresh-section">
            <div className="container">
              <div className="row">
                <div class="col-12">
                  <h4>Daytime/Nighttime</h4>
                  <p>Released 2018 - Specialist Subject Records</p>
                  <h5>Links</h5>
                  <ul>
                    <li>Spotify</li>
                    <li>Bandcamp</li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <img
                    src={daytime}
                    width="100%"
                    alt="Nightime single artwork"
                  />
                </div>
                <div class="col-md-6">
                  <ol>
                    <li>Daytime</li>
                    <li>Nightime</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Music;
