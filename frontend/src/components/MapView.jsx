import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardText, Badge, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Axios from "axios";
import _ from "lodash";
import Loader from "react-loader-spinner";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
const opencage = require("opencage-api-client");

const position = [0, 0];
class MapView extends Component {
  cancelToken = Axios.CancelToken.source();
  static defaultProps = {
    center: {
      lat: 0.0,
      lng: 0.0
    },
    zoom: 0
  };

  state = {
    locAvailable: false
  };

  apiResults = [];
  mapData = [];

  aggregateLocationData = data => {
    let locMap = _.groupBy(data, "location");
    locMap = _.omit(locMap, ["N/A" ,"","NA"])
    
    Promise.allSettled(
      _.map(locMap, (value, key) => ({ location: key, data: value })).map(v => {
        return opencage
          .geocode({ key: "a63d4826f844435bb13696bacb05fa1b", q: v.location })
          .then(data => {
            let o = v;
            o.geometry = data.results[0].geometry;
            return o;
          })
      })
    ).then(data => {
      data =_.map(_.filter(data, x=>x.status != "rejected"), x => x.value)
      this.mapData = data
      console.log(data) 
      this.setState({ locAvailable: true });
    });
  };

  getLocLatLnG() {}
  getMapData = pageIndex => {
    Axios.get(`/api/datasets/?page=${pageIndex}`, {
      cancelToken: this.cancelToken.token
      //headers: headers
    }).then(res => {
      this.apiResults = this.apiResults.concat(res.data.results);
      if (res.data.next != null) {
        this.getMapData(++pageIndex);
      } else {
        this.aggregateLocationData(this.apiResults);
      }
    });
  };

  componentDidMount() {
    this.getMapData(1);
  }

  render() {
    return (
      <div>
        {this.state.locAvailable == false && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {this.state.locAvailable == true && (
          <Map center={position} zoom={2} style={{height:'100vh', width:'100vw'}}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {this.mapData.map(v => {
              if (v && v.geometry) {
                return (
                  <Marker key={Math.random()} position={v.geometry}>
                    
                    <Popup>
                      {v.location} - {v.data.length} Dataset{v.data.length > 1 && 's'}
                      <br />
                      <ul>
                        {v.data.map(data => {
                          return (
                            <li key={Math.random()}>
                               <Link to={`/dataset/${data.id}`}>{data.name || <span>&nbsp;</span>}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </Popup>
                  </Marker>
                );
              }
            })}
          </Map>
        )}
      
      </div>
    );
  }
}

export default MapView;
