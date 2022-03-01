import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Library } from './components/Library';
import { FetchBook } from './components/FetchBook';
import { AddBook } from './components/AddBook';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/Library' component={Library} />
                <Route path='/fetch-book' component={FetchBook} />
                <Route path='/add-book' component={AddBook} />
                <Route path='/book/edit/:id' component={AddBook} />
            </Layout>
        );
    }
}
