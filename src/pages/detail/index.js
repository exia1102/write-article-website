import React, {Component} from 'react';
import { DetailWrapper, Header, Content } from "./style";
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Detail extends Component {
    render(){
        return(
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>

                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetailList(this.props.match.params.id);
    }
}

const mapState =(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});

const mapDispatch=(dispatch)=>({
    getDetailList(id){
        dispatch(actionCreators.detailList(id))
    }
});


export default connect(mapState,mapDispatch)(Detail);