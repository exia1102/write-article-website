import React, {PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import List from './components/list';
import Recommend from './components/recommend';
import Topics from './components/topics';
import Writer from './components/writer';
import {ActionCreators} from './store';
import {connect} from 'react-redux';

class Home extends PureComponent {
    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img src="https://upload.jianshu.io/admin_banners/web_images/4435/c1d3ca63353c8bd527f0d781605516cb5b266d02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""
                    className='banner-img'
                    />
                    <Topics>

                    </Topics>
                    <List>

                    </List>
                </HomeLeft>
                <HomeRight>
                    <Recommend>

                    </Recommend>
                    <Writer>

                    </Writer>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop
                        onClick={this.handleScrollTop}
                    >
                        To Top
                    </BackTop> : null
                }


            </HomeWrapper>
        )

    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTop)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTop)
    }
}

const mapState=(state)=>({
   showScroll:state.getIn(['home','showScroll'])
});

const mapDispatch=(dispatch)=>({
    changeHomeData(){
        const action =ActionCreators.get_home_data();
        dispatch(action);
},
    changeScrollTop(){
        if(document.documentElement.scrollTop>250){
            dispatch(ActionCreators.scrollTopUp(true))
        }else{
            dispatch(ActionCreators.scrollTopUp(false))
        }
    }
});


export default connect(mapState,mapDispatch)(Home);