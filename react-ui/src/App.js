import React from 'react';
import './styles/style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import Dashboard from './components/Dashboard/Dashboard.js'

function App() {
  return (
    <Router>
      <React.Fragment>
        <Row className="m-0" >
          <Col className="p-0" sm={3} id="sidebar-container">
            <Sidebar />
          </Col>
          <Col className="p-0" sm={9}>
            <Header />
            <Row id="main">
              <Col>
                <Switch>
                  <Route path="/" component={Dashboard} />
                  <Route path="/Dashboard2" component={Dashboard} />
                </Switch>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row id="footer-container">
          <Col>
            <Footer />
          </Col>
        </Row>

      </React.Fragment>
    </Router>
  );
}

export default App;
