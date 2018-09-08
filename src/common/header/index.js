import React,{PureComponent} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store/';
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
} from './style';



class Header extends PureComponent {

    getListArea(){
        const {list, page, focused, mouseIn,changePage, totalpage} =this.props;
        const pageList=[];
        const NewList=list.toJS();
        if(NewList.length){
            for(let i=(page-1)*10;i<page*10;i++){
                if(NewList[i]==='') {
                    break;
                }else{
                    pageList.push(<SearchInfoItem key={NewList[i]}>{NewList[i]}</SearchInfoItem>)
                }
            }
        }


        if (focused || mouseIn) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        Hot Search
                        <SearchInfoSwitch
                        onClick={()=>changePage(page,totalpage,this.spinIcon)}
                        >
                            <i ref={(icon)=>{this.spinIcon=icon}} className='iconfont spin'>&#xe851;</i>Change
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
    render(){
        const {focused, handleInputFocus, handleInputBlur,handleMouseEnter,handleMouseLeave,list}=this.props;
        return(
            <HeaderWrapper>
                <Link
                    to='/'
                >
                    <Logo/>
                </Link>

                <Nav>
                    <NavItem className='left active'>HOME</NavItem>
                    <NavItem className='left'>Download</NavItem>
                    <NavItem className='right'>Login</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused': ''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused zoom iconfont': 'iconfont zoom'}>&#xe614;</i>
                        <SearchInfo
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            {this.getListArea()}
                        </SearchInfo>
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

    const mapStateToProps=(state)=>{
        return{
            focused: state.getIn(['header','focused']),
            list:state.getIn(['header','list']),
            page:state.getIn(['header','page']),
            mouseIn: state.getIn(['header','mouseIn']),
            totalpage:state.getIn(['header','totalpage']),
        }
    };
    const mapDispatchToProps=(dispatch)=>{
        return{
            handleInputFocus(list){
                if(list.size===0){
                    dispatch(actionCreators.getList())
                }
                dispatch(actionCreators.searchFocus());
            },
            handleInputBlur(){
                dispatch(actionCreators.searchBlur());
            },
            handleMouseEnter(){
                dispatch(actionCreators.headerMouseEnter());
            },
            handleMouseLeave(){
                dispatch(actionCreators.headerMouseLeave());
            },
            changePage(page,totalpage,spin){
                let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
                if(originAngle){
                    originAngle=parseInt(originAngle,10);
                    console.log(originAngle);
                }else{
                    originAngle=0;
                }
                spin.style.transform='rotate('+(originAngle+360)+'deg)';
                if(page<totalpage){
                    dispatch(actionCreators.changePage( page + 1 ));
                }else{
                    dispatch(actionCreators.changePage(1));
                }
            }
        }
    };

export default connect(mapStateToProps,mapDispatchToProps)(Header);