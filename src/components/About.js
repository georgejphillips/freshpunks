import React from 'react';

import heroImage from '../assets/img/heros/about.jpg';

class About extends React.Component {
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
                <p>
                  Hi there! We are Fresh. Fresh was started in London by me,
                  Kathryn. It was originally a songwriting project, and it was
                  my first ever band. With the help of friend and then-guitarist
                  James Rowland, we released two EPs called Gewingchum (2015)
                  and These Things Are Not That Fun in (2015). We recorded these
                  EPs mostly at James' flat in South London, but we tracked
                  drums at the Camden Roundhouse Studios. We played everything
                  ourselves and released them both directly onto bandcamp.
                  Spurred on by positive comments and vocal support online, we
                  began playing diy shows all over London.
                </p>
                <p>
                  In early 2016 George Phillips (bass) and Daniel Goldberg
                  (drums) joined the band and we started touring outside of our
                  hometown; playing shows all around the south in Brighton,
                  Southampton, Exeter and Bristol. We then signed to Specialist
                  Subject Records and began recording our debut album at The
                  Ranch in Southampton. James Rowland left Fresh shortly after
                  recording, and was replaced by Myles McCabe. Our first record
                  Fresh came out soon after in 2017. We toured the UK and Europe
                  extensively and had lots of fun! We built up a small following
                  and released a two-song EP called Daytime/Nighttime in 2018,
                  working with producer Rich Mandell at Resident Studios in
                  London.
                </p>
                <p>
                  We then began working on our second album Withdraw, again with
                  Rich Mandell and again at Resident Studios. Withdraw came out
                  in 2019, and we continued to tour on it: playing all over the
                  UK, Europe and the USA. We played The Fest in Florida and
                  supported adult mom on their south/east coast tour on the same
                  leg. We then returned to the UK and supported PUP on their UK
                  tour. Our last show before coronavirus was on the 6th of March
                  2020 - a sold-out, headline show at DIYSpace in London.
                </p>
                <p>
                  Since COVID, we’ve been working hard behind the scenes writing
                  and recording. We released our latest Single Girl Clout
                  (produced by Rich Mandell at Resident Studios and Marketstall
                  Studios in London) in March 2021. If you’ve read this far,
                  you’re a legend. Thanks for coming on this journey with us and
                  stick around for what’s yet to come!
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
