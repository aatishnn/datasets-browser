import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import Sidebar from "../components/Sidebar";
import DataSetList from "../components/DataSetList";
import SearchBar from "../components/SearchBar";
import MapView from "../components/MapView";

class SearchPage extends Component {
  render() {
    return (
      <div>
        <Row className="mt-4 mb-4">
          <Col sm={{ size: 10, offset: 1 }}>
            <SearchBar />
          </Col>
        </Row>

        <hr />
        <Row>
          <Col sm="2">
            <Sidebar />
          </Col>
          <Col sm="10">
            <DataSetList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchPage;
