import React from 'react';

import heroImage from '../assets/img/heros/contact.jpg';
class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>Contact</h2>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>Booking Enquiries</h3>
                <p>freshpunks@gmail.com</p>
                <h3>Label</h3>
                <p>andrew@specialistsubjestrecords.co.uk</p>
                <h3>Press</h3>
                <p>katie@someonegreatpr.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
