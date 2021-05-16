import React from 'react';

import heroImage from '../assets/img/heros/podcast.jpg';

class Podcast extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>Podcast</h2>
          <span className="fresh-hero__credit">Photo by Dylan Friese-Greene</span>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>This Podcast Is Not That Fun</h3>
                <p>
                  During lockdown FRESH started a podcast talking about their songs and their weeks. They even started a record club. Listen here:
                </p>
                <ul>
                  <li><a href="https://anchor.fm/freshpunks">Anchor</a></li>
                  <li><a href="https://podcasts.apple.com/gb/podcast/this-podcast-is-not-that-fun-a-fresh-podcast/id1559604301">Apple Podcasts</a></li>
                  <li><a href="https://open.spotify.com/show/2tkPXTK1xro42ZSd1fe1N9">Spotify</a></li>
                  <li><a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81MGM2MzMyNC9wb2RjYXN0L3Jzcw==">Google Podcasts</a></li>
                  <li>Not listed? Just search "This Podcast is Not That Fun" on your fave platform!</li>
                  <li>Still can't find it? Email freshpunks@gmail.com and we'll see what we can do.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Podcast;