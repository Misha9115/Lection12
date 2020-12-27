import React from 'react';
import Posts from './Posts ';


export default class PostsS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            reScrean:false
        };
        this.reScreanChenge=this.reScreanChenge.bind(this)
    }
    reScreanChenge(){
        this.setState({
            reScrean:!this.state.reScrean
        })
    }
    componentDidMount() {
  
    }

    render() {

        return (
            <div>
<Posts reScrean={this.state.reScrean}reScreanChenge={this.reScreanChenge}/>
            </div>
        );
    }
}

