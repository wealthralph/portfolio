import Header from './Components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
      <Router>
      <Header/>
      <Switch>
        <Route path='/' />
      </Switch>
      </Router>
    
    
  );
}

export default App;
