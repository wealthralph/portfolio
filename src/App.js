import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Header';


function App() {
  return (
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/'  />
        <Route path='/Porject'  />
        <Route path='/Thoughts'  />
        <Route path='/Contact Us'  />
      </Switch>
      </Router>
    
    
  );
}

export default App;
