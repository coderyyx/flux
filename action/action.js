/**
 * Created by yyx on 2016/11/3.
 */
import Dispatcher from '../dispatcher/dispatcher.js';
var Actions = {
    addMessage:function(text){
        Dispatcher.dispatch({
            actionType:'ADD_MESSAGE',
            text:text
        })
    },
    transClick:function(text){
    	Dispatcher.dispatch({
    		actionType:'handle_Click',
    		text:text
    	})
    }
}

export default Actions;