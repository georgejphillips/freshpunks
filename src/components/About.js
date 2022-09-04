import React from 'react';
import axios from 'axios';
import Loading from './Loading';

import heroImage from '../assets/img/heros/about.jpg';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    axios
      .get('//freshpunks.com/cms/wp-json/wp/v2/pages')
      .then((res) =>
        this.setState({
          pages: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>About</h2>
          <span className="fresh-hero__credit">Photo by Chiara Gambuto</span>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>Bio</h3>
                {this.state.isLoaded ? (
                  this.state.pages.map((page) => {
                    if (page.id === 8) {
                      return (
                        <div
                          key={page.id}
                          dangerouslySetInnerHTML={{
                            __html: page.content.rendered,
                          }}
                        />
                      );
                    }
                  })
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
