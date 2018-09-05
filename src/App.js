import React, { Component } from 'react';
import store from "./store";
import { Provider } from 'react-redux';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
                <Header>
                </Header>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Home}>
                        </Route>
                        <Route path='/detailed' exact component={Detail}>
                        </Route>
                    </div>
                </BrowserRouter>
            </div>
        </Provider>

    );
  }
}
export default App;
