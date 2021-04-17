import React from 'react';

import heroImage from '../assets/img/heros/news.jpg';

class News extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>News</h2>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>Girl Clout released!</h3>
                <p className="meta">
                  By Fresh <time>28/03/21</time>
                </p>
                <p>We've put out a new song called Girl Clout and you can find it wherever you find your music!</p>
                <p>Stay tuned for more...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>Podcast released!</h3>
                <p className="meta">
                  By Fresh <time>28/03/21</time>
                </p>
                <p>We got bored and decided to make a podcast. Check it out over on the <a href="/podcast">podcast page</a>!</p>
                <p>Stay tuned for more...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
