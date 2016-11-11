/**
 * Created by yyx on 2016/11/3.
 */
import React from 'react';
import ReactDom from 'react-dom';
class TopNav extends React.Component{
    constructor(){
        super();
        this.state={
            value:""
        }
    }
    componentWillMount(){

    }
    handleChange(e){

    }
    handleClick(){

    }
    render(){
        return <div className="">
                    <span style={{color:'red',fontSize:'25px',fontWeight:'900'}}>Flux Demo</span>
                    <input type='text'/>
                </div>
}
}
export default  TopNav;