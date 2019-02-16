import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import VisibleWhenAuthenticated from '../pages/Auth/VisibleWhenAuthenticated';

class DataSetEditLink extends Component {
  render() {
    return (
      <VisibleWhenAuthenticated>
        <Link to={`/dataset/${this.props.id}/edit/`}>
          <span className="float-right">
            <FontAwesomeIcon icon={faEdit} className="float-right" />
          </span>
        </Link>
      </VisibleWhenAuthenticated>
    );
  }
}

export default DataSetEditLink;