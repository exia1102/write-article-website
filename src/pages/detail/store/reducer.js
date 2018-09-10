import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState=fromJS({
    title:'',
    content:''

});

const getDetailList = (state,action)=>{
  return state.merge({
      title:action.title,
      content:action.content,
  });
};

const reducer = (state=defaultState,action)=>{
    switch (action.type){
        case constants.GET_DETAIL_LIST:
            return getDetailList(state,action);
        default:
            return state;
    }
};

export default reducer;