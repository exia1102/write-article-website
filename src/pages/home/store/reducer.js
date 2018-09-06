import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState= fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
});
const reducer = (state=defaultState,action)=>{
    switch (action.type){
        case constants.GET_HOME_DATA:
            return state.merge({
               topicList: fromJS(action.topicList),
               articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case constants.GET_MORE_LIST:
            return state.merge({
                articleList:state.get('articleList').concat(action.list),
                articlePage:action.nextPage
            });
        default:
            return state;
    }
};
export default reducer;