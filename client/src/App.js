import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/pages/Home/HomePage';
import PostsPage from './components/pages/Posts/PostsPage';
import ContactPage from './components/pages/Contact/ContactPage';
import NotFoundPage from './components/pages/NotFound/NotFoundPage';
import SinglePostPage from  './components/pages/SinglePost/SinglePostPage';
import NewPostPage from  './components/pages/NewPost/NewPostPage';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/posts" exact component={PostsPage} />
          <Route path="/contact" exact component={ContactPage}/>
          <Route path="/posts/new" exact component={NewPostPage} />
          <Route path="/posts/:id" exact component={SinglePostPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
