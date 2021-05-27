
import { Container, Row } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Support from './components/Support';
import Programming from './components/Programming';
import ProductionTest from './components/ProductionTest';
import Administration from './components/Administration';
import Logout from './components/Logout';
import {Provider} from 'react-redux';
import store from './services/store';
import SensorDetails from './components/SensorDetails';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Sidebar/>
     <Container>
       <Row>
         <Switch>
           <Route path="/login" exact component={Login}/>
           <Route path="/register" exact component={Register}/> 
           <Route className="programming" path="/programming" exact component={Programming}/>
           <Route path="/productionTest" exact component={ProductionTest}/>
           <Route path="/administration" exact component={Administration}/>
           <Route path="/support" exact component={Support}/>
           <Route path="/sensorDetails" exact component={SensorDetails}/>
           <Route path="/logout" exact component={Logout}/>
         </Switch>
       </Row>
     </Container>
     <Footer/>
    </Router>
  );
}

export default App;
