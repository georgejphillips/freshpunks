import React from 'react';

import heroImage from '../assets/img/heros/about.jpg';

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="fresh-hero">
          <img src={heroImage} alt="" />
          <h2>About</h2>
        </div>
        <div className="fresh-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>Bio</h3>
                <p>
                  London DIY punks FRESH have worked tirelessly since their
                  inception - touring with the likes of The Beths, PUP, Adult
                  Mom and more, releasing two albums and amassing a devoted
                  fanbase following appearances at Fest, Manchester Punk
                  Festival and The Fiest in Madrid amongst others. For a band
                  that have existed for a relatively short period of time, the
                  four-piece have already released a hefty catalogue of work -{' '}
                  prolific, ever evolving and always fresh (in every sense of
                  the word). FRESH have now announced a five track EP to be
                  released on April 30th via Specialist Subject Records. The UK
                  punk scene continues to suffer at the hands of Covid-19 and
                  following a year of no live shows, 'The Summer I Got Good at
                  Guitar' is here to remind us not only of what we're missing
                  but of what we've got to look forward to when FRESH can
                  finally tour again.
                </p>
                <p>
                  FRESH have been an unwavering fixture within the UK punk scene
                  since their first record in 2017. A joy to behold live, the
                  band includes musical peer Myles McCabe of ME REX, while lead
                  singer Kathryn Woods is a member of a number of heralded indie
                  and punk bands, including cheerbleederz and ME REX alongside
                  McCabe. With future plans to tour alongside a new album, FRESH
                  show no signs of slowing down anytime soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
