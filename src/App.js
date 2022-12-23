import {Link, Route, Switch} from "react-router-dom";
import HomePage from './pages/home';
import AboutUs from './pages/aboutUs';
import SignIn from './pages/signIn';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div><Link className="text-div" to='/'>Home</Link></div>
        <div><Link className="text-div" to='/about'>About Us</Link></div>
        <div><Link className="text-div" to='/about/signin'>Sign In</Link></div>
      </header>

      <hr/>

      <main>
      <Switch>
        <Route exact path='/about'>
          <AboutUs />
        </Route>
        <Route exact path='/about/signin'>
          <SignIn />
        </Route>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
