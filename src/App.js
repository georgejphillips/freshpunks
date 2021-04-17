import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
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
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      menuOpen: !state.menuOpen,
    }));
  }

  handleNavClick() {
    this.setState(() => ({
      menuOpen: false,
    }));
  }

  render() {
    return (
      <div className="fresh-site">
        <header className="fresh-header">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <NavLink to="/">
                  <h1>
                    <Logo />
                  </h1>
                </NavLink>
              </div>
              <div className="col-auto">
                <span
                  aria-label="Menu"
                  className={`fresh-menu-button${
                    this.state.menuOpen ? ' fresh-menu-button--is-open' : ''
                  }`}
                  onClick={this.handleClick}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <nav
                  className={`fresh-nav${
                    this.state.menuOpen ? ' fresh-nav--is-open' : ''
                  }`}
                >
                  <ul>
                    <li>
                      <NavLink onClick={this.handleNavClick} to="/music">
                        Music
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={this.handleNavClick} to="/video">
                        Video
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={this.handleNavClick} to="/news">
                        News
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={this.handleNavClick} to="/about">
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={this.handleNavClick} to="/tour">
                        Tour
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={this.handleNavClick} to="/press">
                        EPK
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={this.handleNavClick} to="/podcast">
                        Podcast
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={this.handleNavClick} to="/contact">
                        Contact
                      </NavLink>
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
    );
  }
}

export default App;
