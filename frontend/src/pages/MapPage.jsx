import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import DataSetList from "../components/DataSetList";
import SearchBar from "../components/SearchBar";
import MapView from "../components/MapView";

class MapPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
          <MapView />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MapPage;
