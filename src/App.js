import React, {useState, useEffect} from 'react';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import University from './components/pages/University';
import AboutMe from './components/pages/AboutMe';
import Work from './components/pages/Work';
import Footer from './components/Footer'

const override = css`
  display: block;
  border-color: #242424;
  border-style: solid;
  border-width: 25vh 40vw;
  background-color: #242424;
  padding: 100vh 100%;  
`;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, )
  }, [])
  return (
    <>
    {
      loading ? <RingLoader color={"#36D7B7"} loading={loading} css={override} size={150} />
    :
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/university' component={University} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/work' component={Work} />
        </Switch>
        <Footer />
      </Router>
      }
    </>
  );
}

export default App;