import React from 'react';
import './Post.css';
const TEXT = 'text';
const LIKE = 'lk';
const LOVE = 'lv';


export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sv: false,
            lik: this.props.lk,
            lov: this.props.lv,
            value: this.props.body
        };

    }
    
    addLIK = (lik) => {
  
        
        fetch('http://localhost:3001/posts/2', {

            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
            
                'lk' : lik,
                'id': this.props.id
            })
        });
    }
    addLOV = (lov) => {
        fetch('http://localhost:3001/posts/2', {

            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
                'lv' : lov,
                'id': this.props.id
            })
        });
    }
    chengeLOVT = () => {
        this.setState({
            lov: this.state.lov=true
        })
        this.addLOV(true);
    }
    chengeLOVF = () => {
        this.setState({
            lov: this.state.lov=false
        })
        this.addLOV(false);
    }
    chengeLIKT = () => {
        this.setState({
            lik: this.state.lik=true
        })
        console.log(this.state.lik)
        this.addLIK(true);
    }
    chengeLIKF = () => {
        this.setState({
            lik: this.state.lik=false
        })
        console.log(this.state.lik)
        this.addLIK(false);
    }
    chengeTXT = () => {
        this.setState({
            sv: !this.state.sv
        })
    }
    saveTXT = (e) => {
        this.props.addTXT(this.state.value,this.props.id);
        this.setState({
            value: ''
        })
        this.setState({
            sv: !this.state.sv
        })
    }


    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };
    delet =(id)=>{
      this.props.dele(id)
    }
    render() {

        return (
            <div className='box'>
                <div className='right'>
                    
                    {this.state.sv ? <input
                        type="text"
                        className="text"
                        onChange={this.handleInputChange}
                        value={this.state.value}
                        placeholder={this.props.body} />
                         : <span className='texted'>
                           
                             {this.props.body}
                             
                             </span>}
                    {this.state.sv ? <button className='leftClik' onClick={this.saveTXT} >💾</button> :
                        <button className='leftClik' onClick={this.chengeTXT} >✏️</button>}
                    <button className='leftClik' onClick={()=>{this.delet(this.props.id)}}>🗑</button>
                  
                    
                    </div>
                    <div className="INandBU">

                    {this.state.lik ? <div className='LIKCLIK' onClick={this.chengeLIKF} >👍</div> :
                        <div className='LIK' onClick={this.chengeLIKT} >👍🏿</div>}
                    {this.state.lov ? <div  className='BLLCLIK' onClick={this.chengeLOVF} >❤</div> :
                        <div className='L0V' onClick={this.chengeLOVT} >❤️</div>}
                        </div>

            </div>
        );
    }
}