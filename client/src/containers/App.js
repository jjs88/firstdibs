import React, { Component } from 'react';
import Layout from './Layout/Layout';
import { Route } from 'react-router-dom';
import Browse from './Browse/Browse';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Browse}></Route>
        <Route exact path="/items/:id" component={ItemDetailContainer}></Route>
      </Layout>
    )
  }
}

export default App;
