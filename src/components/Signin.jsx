import React, { Component } from 'react';
import { isUserSignedIn } from 'blockstack';

export default class Signin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="panel-landing" id="section-1">
        <h1 className="landing-heading">Welcome to EasyContract!</h1>
        <h3>Reclaiming your legal rights by helping you understand law contracts and reclaiming ownership over your agreements encrypted on the blockchain</h3>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signin-button"
            onClick={ handleSignIn.bind(this) }
          >
            Sign In with Blockstack
          </button>
        </p>
      </div>
    );
  }
}
