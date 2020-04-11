import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    // dynamic import function that only imports whatever it's passed as an argument when the anonymous function 
    // is executed
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* use Link (or NavLink) component to prevent the app from reloading the page */}
                            <li><NavLink 
                                to="/posts" 
                                exact 
                                activeClassName="my-active" 
                                activeStyle={{
                                    color: '#FA923F', 
                                    textDecoration: "underline"
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                //pathname: this.props.match.url + '/new-post', // this is how we create a relative path
                                hash: '#submit',                // so we can jump to a certain element in the new page
                                search: '?quick-submit=true'    // search parameters
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts/>} /> */}
                {/* Switch only loads the first Route that matches the path */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* this is a catch all route, but won't work with redirect where from="/" because that also catches all routes */}
                    <Route render={() => (<h1>Not Found</h1>)} />  
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;