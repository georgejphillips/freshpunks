import React from 'react';

import fb from '../assets/img/icons/facebook.svg';
import insta from '../assets/img/icons/instagram.svg';
import tiktok from '../assets/img/icons/tiktok.svg';
import twitch from '../assets/img/icons/twitch.svg';
import twitter from '../assets/img/icons/twitter.svg';
import youtube from '../assets/img/icons/youtube.svg';

const getYear = () => {
  return new Date().getFullYear();
};

class Footer extends React.Component {
  render() {
    return (
      <footer className="fresh-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-auto">
              <p>
                ©{getYear()} Fresh |
                <a className="icon" href="https://www.facebook.com/freshpunks">
                  <img src={fb} alt="Facebook" width="24px" />
                </a>
                <a className="icon" href="https://www.twitter.com/freshpunks">
                  <img src={twitter} alt="Twitter" width="24px" />
                </a>
                <a className="icon" href="https://www.youtube.com/freshpunks">
                  <img src={youtube} alt="YouTube" width="24px" />
                </a>
                <a className="icon" href="https://www.instagram.com/freshpunks">
                  <img src={insta} alt="Instagram" width="24px" />
                </a>
                <a className="icon" href="https://www.twitch.tv/freshpunks">
                  <img src={twitch} alt="Twitch" width="24px" />
                </a>
                <a className="icon" href="https://www.tiktok.com/freshpunks">
                  <img src={tiktok} alt="TikTok" width="24px" />
                </a>
              </p>
            </div>
            <div className="col-12 col-md-auto">
              <p>Site designed and built by George Phillips</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
