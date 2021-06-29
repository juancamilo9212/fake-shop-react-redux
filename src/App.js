
import './App.css';
import Header from './containers/Header.jsx';
import ProductListing from './containers/ProductListing.jsx';
import ProductComponent from './containers/ProductComponent.jsx';
import ProductDetail from './containers/ProductDetail.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path='/' exact component = {ProductListing}/>
      <Route path='/product/:productId' exact component = {ProductDetail}/>
      <Route>404 Not Found!</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
