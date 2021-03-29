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
                <p class="meta">
                  By Fresh <time>28/03/21</time>
                </p>
                <p>Here's some news</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>EP released!</h3>
                <p class="meta">
                  By Fresh <time>28/03/21</time>
                </p>
                <p>Here's some news</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
