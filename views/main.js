/**
 * Created by yyx on 2016/11/3.
 */
import React from 'react';
import ReactDom from 'react-dom';
import MessageBox from './messageBox.js';
import ListStore from '../store/ListStore.js';
import Actions from '../action/action.js';
//var messageList=[];
class Main extends React.Component{
    constructor(){
        super();
        this.state={
            value:"",
            items:[]
        }
    }
    componentWillMount(){

    }
    componentDidMount() {
        var that=this;
        ListStore.addChangeListener(that._onChange.bind(that));
        this.setState({value:""});
    }
    componentWillUnmount() {
        ListStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState({
            items: ListStore.getAll()
        });
    }
    handleChange(e){
        let value=e.target.value;
        this.setState({value:value});
    }
    handleClick(){
        var that=this;
        console.log(that.state.value);
        Actions.addMessage(that.state.value);
    }
    render(){
           return <div className="root">
                        <MessageBox messageList={this.state.items}/>
                        <div className="inputs">
                            <input type="text" onChange={(e)=>{this.handleChange(e)}} value={this.state.value}/>
                            <input type="button" value="add" onClick={()=>{this.handleClick()}}/>
                        </div>
                    </div>
    }
}
export default  Main;