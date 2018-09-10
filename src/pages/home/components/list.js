import React, {PureComponent} from 'react';
import {ListItem,ListInfo,LoadMore}from '../style';
import {connect} from 'react-redux';
import {ActionCreators} from '../store'
import {Link} from "react-router-dom";
class List extends PureComponent {
    render(){
        const { list,page,getMoreList }= this.props;
        return(
            <div>
                {list.map((item,index)=> {
                    return(
                        <Link
                            to={"/detailed/"+item.get('id')}
                        >
                            <ListItem key={index}>
                                <img className='pic' src={item.get('imgUrl')} alt=""/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                        )
                })}
                <LoadMore
                onClick={()=>getMoreList(page)}
                >
                    View More
                </LoadMore>
            </div>
        )

        }
    }


const mapState=(state)=>({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
});

const mapDispatch =(dispatch)=>({
   getMoreList(page){
       dispatch(ActionCreators.getMoreList(page))
   }
});


export default connect(mapState,mapDispatch)(List);