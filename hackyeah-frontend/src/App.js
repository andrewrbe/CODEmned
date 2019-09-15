import React, { Component } from 'react';
import './styles/main.scss';
import Routing from './components/Routing';
import { auth } from './constants';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };

    this.checkAuth = this.checkAuth.bind(this);
  }

  componentDidMount() {
    this.checkAuth();
  }

  async checkAuth() {
    const response = await fetch(auth.check);

    const json = await response.json();

    this.setState({ loading: false });

    const { auth: isLoggedIn } = json;

    if (isLoggedIn) {
      window.location = auth.redirect;
    }
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <Routing />
    );
  };
}

export default App;
