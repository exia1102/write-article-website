import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState= fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:false,
});

const getHomeData=(state,action)=>{
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    })
};

const getMoreList=(state,action)=>{
    return state.merge({
        articleList:state.get('articleList').concat(action.list),
        articlePage:action.nextPage
    })
};


const reducer = (state=defaultState,action)=>{
    switch (action.type){
        case constants.GET_HOME_DATA:
            return getHomeData(state,action);
        case constants.GET_MORE_LIST:
            return getMoreList(state,action);
        case constants.SCROLL_TOP_UP:
            return state.set('showScroll',action.show);
        default:
            return state;
    }
};
export default reducer;