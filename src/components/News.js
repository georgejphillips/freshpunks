import React from 'react';
import axios from 'axios';

import Post from './Post';
import Loading from './Loading'
import heroImage from '../assets/img/heros/news.jpg';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    axios.get('//freshpunks.com/cms/wp-json/wp/v2/posts').then(res => this.setState({
      news: res.data,
      isLoaded: true,
    })).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>News</h2>
          <span className="fresh-hero__credit"></span>
        </div>
        {this.state.isLoaded
          ? this.state.news.map((post) => {

              return (
                <Post
                  key={post.id}
                  title={post.title.rendered}
                  date={post.date}
                  content={post.content.rendered}
                />
              );
            })
          : (<div className="container"><div className="row"><div className="col-12"><Loading/></div></div></div>)}
      </div>
    );
  }
}

export default News;
