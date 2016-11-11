/**
 * Created by yyx on 2016/11/3.
 */
import Flux from 'flux';
import ListStore from '../store/ListStore.js';
import PageStore from '../store/pageStore.js';
var Dispatcher=Flux.Dispatcher;
Dispatcher=new Dispatcher();

Dispatcher.register(function(action){
    switch(action.actionType){
        case 'ADD_MESSAGE':
            ListStore.addMessage(action.text);
            ListStore.emitChange();
            break;
        case 'handle_Click':
            PageStore.transClick(action.text);
            PageStore.emitChange();
            break;
        default :
    }
})

export default Dispatcher;