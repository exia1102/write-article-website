import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBox,Input,Button} from "./style";


class Login extends PureComponent {
    render(){
        return(
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='user name'></Input>
                    <Input placeholder='password'></Input>
                    <Button>Login</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
    componentDidMount(){
    }
}

const mapState =(state)=>({

});

const mapDispatch=(dispatch)=>({

});


export default connect(mapState,mapDispatch)(Login);