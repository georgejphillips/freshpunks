import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from './components/Logo';
import Home from './components/Home';
import Music from './components/Music';
import Video from './components/Video';
import News from './components/News';
import Podcast from './components/Podcast';
import About from './components/About';
import Tour from './components/Tour';
import Press from './components/Press';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '../src/sass/styles.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="fresh-site">
          <header className="fresh-header">
            <div className="container">
              <div className="row justify-content-center justify-content-md-between align-items-center">
                <div className="col-auto">
                  <Link to="/">
                    <h1>
                      <Logo />
                    </h1>
                  </Link>
                </div>
                <div className="col-auto">
                  <nav className="fresh-nav">
                    <ul>
                      <li>
                        <Link to="/music">Music</Link>
                      </li>
                      <li>
                        <Link to="/video">Video</Link>
                      </li>
                      <li>
                        <Link to="/news">News</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/tour">Tour</Link>
                      </li>
                      <li>
                        <Link to="/press">EPK</Link>
                      </li>
                      <li>
                        <Link to="/podcast">Podcast</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/music">
                <Music />
              </Route>
              <Route path="/video">
                <Video />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/tour">
                <Tour />
              </Route>
              <Route path="/press">
                <Press />
              </Route>
              <Route path="/podcast">
                <Podcast />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </main>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
