import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style';

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>HOME</NavItem>
                    <NavItem className='left'>Download</NavItem>
                    <NavItem className='right'>Login</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe614;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe615;</i>
                        Write Article
                    </Button>
                    <Button className='reg'>SignUp</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;