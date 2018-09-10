import * as constants from './constants';
import { fromJS } from 'immutable'

const defaultState= fromJS({
    focused:false,
    list:[],
    page:1,
    totalpage:0,
    mouseIn:false,
});
const reducer = (state=defaultState,action)=>{

    switch (action.type){
        case constants.SEARCH_FOUCS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.GET_LIST:
            return state.merge({
                list:action.data,
                totalpage:action.totalpage,
            });
        case constants.HANDLE_MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.HANDLE_MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);

        default:
            return state;
    }


};

export default reducer;