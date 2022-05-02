import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
// import Home from '../components/home/Home'
import Footer from '../components/template/Footer'
import Main from "../components/template/Main";
import routes from "../router/index";

export default props =>
  <Router>
    <div className="app">
      <Logo />
      <Nav />
      <Suspense fallback={<div>...</div>}>
        <Switch>
          <Main icon="home" title="Início" subtitle="Segundo Projeto do Capítulo de React">
            {routes.map((route, index) => (
              <Route exact key={`key_route_${index}`} path={route.path} component={route.component} />
            ))}
          </Main>
        </Switch>
      </Suspense>
      <Footer />
    </div >
  </Router>
