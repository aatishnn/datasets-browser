import React, { Component } from 'react';
import { Container, } from 'reactstrap';
import { Route } from 'react-router-dom'
import TopNav from './components/TopNav';

import './App.css'
import SearchPage from './pages/SearchPage';
import DataSetDetailPage from './pages/DataSetDetailPage';

class App extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <Container>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/detail/:id" component={DataSetDetailPage} />
        </Container>
      </div>

    );
  }
}

export default App;
