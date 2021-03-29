import React from 'react';

const getYear = () => {
  return new Date().getFullYear()
}

class Footer extends React.Component {
  render() {
    return (
      <footer className="fresh-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-auto">
              <p>©{ getYear() } Fresh</p>
            </div>
            <div className="col-12 col-md-auto">
              <p>Site designed and built by George Phillips</p>
            </div>
          </div>
        </div>

      </footer>
    )};
}

export default Footer;