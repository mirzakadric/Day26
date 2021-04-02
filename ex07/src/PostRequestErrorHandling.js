import React, { Component } from "react";
import axios from "axios";

class PostRequestErrorHandling extends Component {
    constructor(props){
        super(props);
        this.state = {
            articleId: null,
            errorMessage: null
        };
    }
    render() {
        const {errorMessage} = this.state;
        return(
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Error handling</h5>
                <div className="card-body">Error message: {errorMessage}</div>
            </div>
        );
        
    }
    componentDidMount() {
        const article = {title: 'React POST Request Example'};
        axios.post('https://reqres.in/invalid-url', article)
            .then(response => { this.setState({articleId: response.data.id}) })
        .catch(error => {
            this.setState({errorMessage: error});
            console.error({'There was an error!': error});
        });
    }
}

export default PostRequestErrorHandling;