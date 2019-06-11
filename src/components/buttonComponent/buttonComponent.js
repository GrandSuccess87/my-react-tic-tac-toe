import React, { Component } from 'react';
import './buttonComponent.css';

class ButtonComponent extends Component {

  render() {
    return (
      <div className={this.props.divClassName}>
          <a className={this.props.linkClassName} href={this.props.url}>
            <div id={this.props.id}>
              {this.props.buttonName}
            </div>
          </a>
      </div>
    );
  }
}

export default ButtonComponent;
