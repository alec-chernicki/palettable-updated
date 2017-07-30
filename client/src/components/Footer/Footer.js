import './Footer.css';

import React, { Component } from 'react';

class Footer extends Component {
  handleRestartTutorial() {
  }
  render() {
    return (
      <footer>
        <a className="footer-icon twitter" onClick={this.handleTweet} />
        <a className="footer-icon github" href="https://github.com/alecortega/palettable" />
        <a className="tutorial" onClick={this.props.onStartTutorial}>Tutorial</a>
      </footer>
    );
  }
}

export default Footer;
