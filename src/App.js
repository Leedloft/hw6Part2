import { Link, Route, Switch } from "react-router-dom";
import HomePage from './pages/home';
import AboutUs from './pages/aboutUs';
import SignIn from './pages/signIn';
import Header from './pages/header';
import './App.css';

function App() {
  return (
    <div>
        <Header/>

      <hr />

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
