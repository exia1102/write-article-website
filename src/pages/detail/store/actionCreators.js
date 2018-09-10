import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';


const changeDetail=(title,content)=>({
    type:constants.GET_DETAIL_LIST,
    title:fromJS(title),
    content:fromJS(content),
});

export const detailList=(id)=>{
    return(dispatch)=>{
        axios.get('/api/detailList.json?id='+id).then((res)=>{
            const result=res.data.data;
            dispatch(changeDetail(result.title,result.content));
        })
    }
};