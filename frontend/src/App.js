import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import DataSetList from './components/DataSetList';
import SearchBar from './components/SearchBar';

import './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <Container>
          <Row className="mt-4 mb-4">
            <Col sm={{ size: 10, offset: 1 }}>
              <SearchBar/>
            </Col>
          </Row>

          <hr />
          <Row>
            <Col sm="4"><Sidebar /></Col>
            <Col sm="8"><DataSetList /></Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default App;
