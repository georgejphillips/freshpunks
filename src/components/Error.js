import React from 'react';

import heroImage from '../assets/img/heros/error.jpg';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>Page not found</h2>
          <span className="fresh-hero__credit">Photo by @gingerdope</span>
        </div>
        <div className="fresh-section">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <p><a href="/">Go home</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
