import React, {Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style';
import List from './components/list';
import Recommend from './components/recommend';
import Topics from './components/topics';
import Writer from './components/writer';

class Home extends Component {
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
            </HomeWrapper>
        )
    }
}

export default Home;