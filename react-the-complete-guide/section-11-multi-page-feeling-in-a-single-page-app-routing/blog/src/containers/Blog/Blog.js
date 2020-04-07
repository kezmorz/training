import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* use Link component to prevent the app from reloading the page */}
                            <li><NavLink 
                                to="/" 
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
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;