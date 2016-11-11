/**
 * Created by yyx on 2016/11/3.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Actions from '../action/action.js';
import LeftStore from '../store/pageStore.js';
import LeftPage1 from './LeftPage1.js';
import LeftPage2 from './LeftPage2.js';
import LeftPage3 from './LeftPage3.js';
import LeftPage4 from './LeftPage4.js';
const pagesArr=[LeftPage1,LeftPage1,LeftPage2,LeftPage3,LeftPage4];
class LeftPage extends React.Component{
    constructor(){
        super();
        this.state={
            value:"",
            index:""
        }
    }
    componentWillMount(){
        LeftStore.addChangeListener(()=>this._onChange());
    }
    componentWillUnmount(){
        LeftStore.removeChangeListener(this._onChange);
    }
    handleChange(e){

    }
    _onChange(){
        console.log(this)
        this.setState({index:LeftStore.getIndex()})
    }
    handleClick(){

    }
    click1(){
        Actions.transClick(1);
    }
    click2(){
        Actions.transClick(2);
    }
    click3(){
        Actions.transClick(3);
    }
    click4(){
        Actions.transClick(4);
    }
    render(){
        var MainPage=this.state.index==""?LeftPage1:pagesArr[this.state.index];
        return  <div style={{width:'100%',height:'100%',overflow:'hidden',zoom:1,clear:'both'}}>
                    <div className="menuList">
                        <a href="#" onClick={this.click1}>第一部分</a>
                        <a href="#" onClick={this.click2}>第二部分</a>
                        <a href="#" onClick={this.click3}>第三部分</a>
                        <a href="#" onClick={this.click4}>第四部分</a>
                    </div>
                    <div className="inputs" style={{float:'right',width:'86%',height:'100%'}}><MainPage/></div>
                </div>
}
}
export default  LeftPage;