import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home'




function App() {
  return (
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        
      </Switch>
      </Router>
    
    
  );
}

export default App;
