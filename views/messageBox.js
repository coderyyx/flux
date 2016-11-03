/**
 * Created by yyx on 2016/11/3.
 */
import React from 'react';
import ReactDom from 'react-dom';
require('../css/default.css');
class MessageBox extends React.Component{
    constructor(){
        super();
        this.state={
            value:""
        }
    }
    componentWillMount(){

    }
    handleChange(e){
        let value=e.target.value;
        this.setState({value:value});
    }
    handleClick(){

    }
    render(){
        return <div className="box">
                    <div className="mBox">
                        <ul>{this.props.messageList}</ul>
                    </div>
                </div>
}
}
export default  MessageBox;