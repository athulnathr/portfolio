import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
function App() {
  const routes = [
    {
      path: "/",
      Component: Home,
      name: 'Home'
    },
    {
      path: '/about',
      Component: About,
      name: 'About'
    }
  ]
  return (
    <div className="App">
      <Header />
      <Switch>
        <div className="container">
          {
            routes.map(({ path, Component, name }) => (
              <Route key={name} path={path} exact>
                {({ match }) =>
                  <CSSTransition
                    in={match !== null}
                    timeout={1200}
                    classNames='page'
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                }
              </Route>
            ))
          }

        </div>
      </Switch>
    </div>
  );
}

export default App;
