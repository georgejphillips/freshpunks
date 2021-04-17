import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';

import heroImage from '../assets/img/heros/video.jpg';

class Press extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>Video</h2>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>Going to Brighton</h3>
                <YoutubeEmbed embedId="KZ2bSRcf8p8" />
                <h3>Daytime</h3>
                <YoutubeEmbed embedId="NLJVFzA1dTE" />
                <h3>Nighttime</h3>
                <YoutubeEmbed embedId="hPi2SFu0VDE" />
                <h3>I'll be Back</h3>
                <YoutubeEmbed embedId="oPRxPKWhp60" />
                <h3>Bible Camp</h3>
                <YoutubeEmbed embedId="36cLmQdGTzE" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Press;
