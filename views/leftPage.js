/**
 * Created by yyx on 2016/11/3.
 */
import React from 'react';
import ReactDom from 'react-dom';
class LeftPage extends React.Component{
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
        return <div className="menuList">
                    <a href="#">第一部分</a>
                    <a href="#">第二部分</a>
                    <a href="#">第三部分</a>
                    <a href="#">第四部分</a>
                </div>
}
}
export default  LeftPage;