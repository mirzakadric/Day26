import React, { Component } from "react";
import axios from "axios";

class PostRequestSetHeaders extends Component {
    constructor(props){
        super(props);
        this.state = {
            articleId: null
        };
    }
    render() {
        const {articleId} = this.state;
        return(
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Set Headers</h5>
                <div className="card-body">Article Id: {articleId}</div>
            </div>
        );
        
    }
    componentDidMount() {
        const article = { title: 'React POST Request Example' };
        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        }
        axios.post('https://reqres.in/api/articles', article, {headers})
        .then(response => this.setState({articleId: response.data.id}));
    }
}

export default PostRequestSetHeaders;