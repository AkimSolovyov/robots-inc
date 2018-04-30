import React, { PureComponent } from 'react';
import Layout from './Layout';

class App extends PureComponent {
  constructor() {
    super();
    this.state = { appName: 'Robots inc', robots: [] };
  }

  render() {
    return (
      <Layout>
        <h1>Greetings, human. </h1>
      </Layout>
    );
  }
}

export default App;
