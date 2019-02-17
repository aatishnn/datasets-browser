import React, { Component } from 'react';
import { Container, } from 'reactstrap';
import { Route, Switch } from 'react-router-dom'
import TopNav from './components/TopNav';

import './App.css'
import SearchPage from './pages/SearchPage';
import DataSetDetailPage from './pages/DataSetDetailPage';
import DataSetEdit from './pages/DataSetEdit';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import DataSetCreate from './pages/DataSetEdit/DataSetCreate';
import Login from './pages/Auth/Login';
import PrivateRoute from './pages/Auth/PrivateRoute';
import DataSetSuggestPage from './pages/DataSetSuggestPage';
import DataSetSuggestSuccessPage from './pages/DataSetSuggestSuccessPage';


class App extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <Container className="mt-4">
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/login/" component={Login} />
            <Route exact path="/dataset/suggest/" component={DataSetSuggestPage} />
            <Route exact path="/dataset-suggest-success/" component={DataSetSuggestSuccessPage} />

            <PrivateRoute exact path="/dataset/new/" component={DataSetCreate} />
            <Route exact path="/dataset/:id/" component={DataSetDetailPage} />
            <PrivateRoute exact path="/dataset/:id/edit/" component={DataSetEdit} />
          </Switch>
        </Container>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />

      </div>

    );
  }
}

export default App;
