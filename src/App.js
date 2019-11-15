import React,{ Component } from 'react';
import Navbar from './nav';
import {BrowserRouter,Route} from 'react-router-dom';
import Contact from './contact';
import About from './about';
import Home from './home';


class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
          <div className="app">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
      </BrowserRouter>
      
      
    )
  };
}



export default App;
