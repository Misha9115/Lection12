import React from 'react';
import Post from './Post';
const axios = require('axios');


export default class PostS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {
                id: 2,
                lk: true,
                lv: true,
                
                text: "xerrr"
            },
            sv :false,
            data: [

            ]
        };
    }
    
    scrinData=()=>{
        fetch("http://localhost:3001/posts")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    data: result.posts
                });
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }
    

    addTXT = (value,id) => { 
        fetch('http://localhost:3001/posts/2', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'text' : value,
                'id': id
            })
        });
        this.scrinData()
    }
    dele =(id)=>{
        fetch('http://localhost:3001/posts/2', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': this.props.id
            })
        });
        this.scrinData()
    }

    componentDidMount() {
    
     fetch("http://localhost:3001/posts")
     .then(res => res.json())
     .then(
         (result) => {
             this.setState({
                 data: result.posts
             });
         },
         (error) => {
             this.setState({
                 error
             });
         }
     )
    }

    render() {
        if( this.props.reScrean===true){
            this.scrinData()
            this.props.reScreanChenge()
        }
       
        return (
            <div>
                <p>{this.state.people}</p>
                {
                    this.state.data.map((e) =>
                        <Post key={e.id}
                            lk={e.lk}
                            lv={e.lv}
                            id={e.id}
                          dele ={this.dele}
                          addTXT={this.addTXT}
                            body={e.text}  
                        />
                    )
                }

            </div>
        );
    }
}

