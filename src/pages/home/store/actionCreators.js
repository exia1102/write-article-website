import axios from "axios";
import * as constants from './constants';
import {fromJS} from 'immutable';
const getdata =(result)=>(
    {
        type:constants.GET_HOME_DATA,
        topicList:result.topicList,
        articleList:result.articleList,
        recommendList:result.recommendList,
    }
);
const addList=(list,nextPage)=>({
    type:constants.GET_MORE_LIST,
    list:fromJS(list),
    nextPage
});


export const get_home_data=()=>{
    return(dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            dispatch(getdata(result));
        });
    }

};

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result=res.data.data;
            const nextPage=page+1;
            dispatch(addList(result,nextPage));
        });
    }
};

export const scrollTopUp=(show)=>({
    type:constants.SCROLL_TOP_UP,
    show
});

