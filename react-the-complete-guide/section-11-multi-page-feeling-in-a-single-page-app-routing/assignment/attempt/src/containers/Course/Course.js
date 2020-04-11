import React, { Component } from 'react';
import queryString from 'query-string';

class Course extends Component {
    render () {
        const id = this.props.match.params.id;
        const title = queryString.parse(this.props.location.search).title;
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;