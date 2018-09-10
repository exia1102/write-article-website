import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class Write extends PureComponent {
    render(){
        const {loginStatus} =this.props;
        if(loginStatus){
            return(
                <div>write your article is under construction</div>
            )
        }else{
            return(
                <Redirect to='/login'>
                </Redirect>
            )
        }

    }
    componentDidMount(){
    }
}

const mapState =(state)=>({
    loginStatus:state.getIn(['login','login']),
});

const mapDispatch=(dispatch)=>({

});


export default connect(mapState,mapDispatch)(Write);