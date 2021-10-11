import React from 'react';

class Post extends React.Component {
  formatDate(d) {
    const date = new Date(d);
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();

    return `${day}/${month}/${year}`;
  }

  render() {
    return (<div className="fresh-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3 dangerouslySetInnerHTML={{ __html: this.props.title }}/>
            <p className="meta">
              By Fresh <time>{this.formatDate(this.props.date)}</time>
            </p>
            <div dangerouslySetInnerHTML={{ __html: this.props.content }}/>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Post;
