import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList=(data)=>({
    type:constants.GET_LIST,
    data:fromJS(data),
    totalpage:Math.ceil(data.length/10)
});

export const searchFocus=()=>({
    type:constants.SEARCH_FOUCS
});

export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
});


export const getList=()=>{
    return(dispatch)=>{
        axios.get("/api/headerList.json")
            .then((res)=>{
                const data = res.data;
            dispatch(changeList(data.data));
        }).catch(()=>{
            console.log("error");
        })
    }
};
export const headerMouseEnter=()=>({
    type:constants.HANDLE_MOUSE_ENTER
});
export const headerMouseLeave=()=>({
    type:constants.HANDLE_MOUSE_LEAVE
});
export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page
});

