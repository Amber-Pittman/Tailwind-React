//import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Index'
import About from './pages/About'
import Store from './pages/Store'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Store} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;