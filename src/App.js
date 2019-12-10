import React from 'react';
import Header from "./components/Header";
import SideBar from './components/SideBar'
import Main from './components/Main';
import {Container, Row, Col} from 'react-bootstrap'
import './styles/bootstrap-custom.sass';

function App() {
  return (
    <Container>
      <Header/>
      <Row>
          <Col md={3}>
              <SideBar/>
          </Col>
          <Col md={9}>
              <Main/>
          </Col>
      </Row>
    </Container>
  );
}

export default App;
