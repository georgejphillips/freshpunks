import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';

import heroImage from '../assets/img/heros/press.jpg';
import pressImage1 from '../assets/img/press/fresh-press-1.jpg';
import pressImage2 from '../assets/img/press/fresh-press-2.jpg';

class Press extends React.Component {
  render() {
    return (
      <div className="fresh-press">
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>EPK</h2>
          <span className="fresh-hero__credit">@gingerdope</span>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Short bio</h3>
                <p>
                  London DIY punks <strong>FRESH</strong> have worked tirelessly since their
                  inception - touring with the likes of The Beths, PUP, Adult
                  Mom and more, releasing two albums and amassing a devoted
                  fanbase following appearances at Fest, Manchester Punk
                  Festival and The Fiest in Madrid amongst others. For a band
                  that have existed for a relatively short period of time, the
                  four-piece have already released a hefty catalogue of work - {' '}
                  prolific, ever evolving and always fresh (in every sense of
                  the word). <strong>FRESH</strong> have now announced a five track EP to be
                  released on April 30th via Specialist Subject Records. The UK
                  punk scene continues to suffer at the hands of Covid-19 and
                  following a year of no live shows, 'The Summer I Got Good at
                  Guitar' is here to remind us not only of what we're missing
                  but of what we've got to look forward to when <strong>FRESH</strong> can
                  finally tour again.
                </p>
                <p>
                <strong>FRESH</strong> have been an unwavering fixture within the UK punk scene
                  since their first record in 2017. A joy to behold live, the
                  band includes musical peer Myles McCabe of ME REX, while lead
                  singer Kathryn Woods is a member of a number of heralded indie
                  and punk bands, including cheerbleederz and ME REX alongside
                  McCabe. With future plans to tour alongside a new album, <strong>FRESH</strong>{ ' ' }
                  show no signs of slowing down anytime soon.
                </p>
              </div>
              <div className="col-md-6">
                <h3>Videos</h3>
                <YoutubeEmbed embedId="KZ2bSRcf8p8" />
                <YoutubeEmbed embedId="oPRxPKWhp60" />
              </div>
            </div>
          </div>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Press photos</h3>
                <a href="/assets/img/press/fresh-press-1.jpg">
                  <img width="100%" src={pressImage1} alt="Fresh Press Shot" />
                </a>
                <a href="/assets/img/press/fresh-press-2.jpg">
                  <img width="100%" src={pressImage2} alt="Fresh Press Shot" />
                </a>
              </div>
              <div className="col-md-6">
                <h3>Enquiries</h3>
                <a href="/contact">View the contact page</a>
              </div>
            </div>
          </div>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Quote and reviews</h3>
                <p>"The band prove themselves to be honest, unguarded and fervently impassioned” - <strong>GoldFlakePaint</strong></p>
                <p>"As fun and catchy as it is biting and vicious" - <strong>Brooklyn Vegan</strong></p>
                <p>"A viscerally affirming, full blast two minute truth bomb" - <strong>Dork</strong></p>
              </div>
              <div className="col-md-6">
                <h3>Social media</h3>
                <ul>
                  <li><a href="https://www.facebook.com/freshpunks" target="_blank" rel="nofollow">Facebook</a></li>
                  <li><a href="https://www.twitter.com/freshpunks" target="_blank" rel="nofollow">Twitter</a></li>
                  <li><a href="https://www.instragram.com/freshpunks" target="_blank" rel="nofollow">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/freshpunks" target="_blank" rel="nofollow">Tiktok</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Press;
