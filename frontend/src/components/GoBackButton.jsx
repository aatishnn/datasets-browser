import React, { Component } from 'react'
import {Button} from 'reactstrap'
import { withRouter } from 'react-router-dom'

class GoBackButton extends Component {
  goBack = () => {
    this.props.history.goBack();
  }
  render() {
    return (
      <Button color="secondary" className="rounded-pill" onClick={this.goBack}>Back</Button>
    );
  }
}

export default withRouter(GoBackButton);