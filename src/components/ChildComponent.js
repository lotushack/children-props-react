import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return (

        <div>
          <button type="submit" className="btn btn-primary" onClick={this.props.onClick}>Submit</button>
        </div>
    );
  }
}
export default ChildComponent;
