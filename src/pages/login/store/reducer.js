import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState= fromJS({
    login:false
});



const reducer = (state=defaultState,action)=>{
    switch (action.type){

        default:
            return state;
    }
};
export default reducer;