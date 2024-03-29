import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
        {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
