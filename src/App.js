import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import University from './components/pages/University';
import AboutMe from './components/pages/AboutMe';
import Work from './components/pages/Work';
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 9000)
  }, [])
  return (
    <>
    {
     
      loading ? <div id='my-div'><img class="animated-gif "src="/videos/loader.gif" /></div>
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