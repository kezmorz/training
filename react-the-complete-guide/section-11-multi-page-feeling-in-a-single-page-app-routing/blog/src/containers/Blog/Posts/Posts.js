import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push({
            pathname: '/posts/' + id
        })
        console.log(this.props.history);
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link key={post.id} to={'/' + post.id}>
                    //     <Post 
                    //         title={post.title} 
                    //         author={post.author}
                    //         clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                    <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                )
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;