import React, { useEffect } from "react"
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Input } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { connect } from "react-redux";
import { signOutApi } from '../actions';
import { useNavigate } from "react-router-dom";

const Header = (props) => {

    const navigate = useNavigate();

    const signOutFunc = () => {
        props.signOut();
    }

    useEffect(() => {
        if (!props.user) {
            navigate("/")
        }
    }, [props.user])

    return (
        <HeaderWrapper>
            <Content>
                <Logo>
                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="home__logoImg" />
                    </a>
                </Logo>
                <Search>
                    <SearchIcon />
                    <Input
                        className="header__input"
                        placeholder="enter your search"
                    />
                </Search>
                <NavMenu>
                    <NavListWrap>
                        <NavList>
                            <a>
                                <HomeIcon />
                                Home
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <AppsOutageIcon />
                                Online
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <BusinessCenterOutlinedIcon />
                                Jobs
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <MapsUgcIcon />
                                Massage
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <NotificationsIcon />
                                Notifications
                            </a>
                        </NavList>

                        <NavList className="header__avatar">
                            <a>
                                {props.user && props.user.photoURL ?
                                    (
                                        <>
                                            <Avatar src={props.user.photoURL} />
                                            <ArrowDropDownIcon className="arrow__icon" />
                                            <SignOut
                                                onClick={signOutFunc}
                                            > Sign Out
                                            </SignOut>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <Avatar />
                                            <ArrowDropDownIcon className="arrow__icon" />
                                            <SignOut

                                            > Sign Up
                                            </SignOut>
                                        </>
                                    )
                                }
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <AppsOutageIcon />
                                Works
                            </a>
                        </NavList>
                    </NavListWrap>
                </NavMenu>
            </Content>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.68);
    left: 0 !important;
    top: 0;
    padding: 3px 24px;
    position: sticky;
    position: -webkit-sticky;
    z-index: 10000;
    right:0 ;

    @media screen and (max-width:450px){
        .header__input{
            display:none !important;
        }
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.span`
    margin-right: 8px;
    width: 30px;
    font-size: 8px;
    height: 100%;
    a{
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`;

const Search = styled.div`
    display: inline-flex;
    align-items:center;
    background: lavender;
    padding: 3px;
    border:1px solid lightgray;
    border-radius: 2px;

    &:hover{
        border: 1px solid rgb(10,70,200);
    }
`;

const NavMenu = styled.div`
    margin-left: auto;
    display: block;
    width: 50%;
    @media screen and (max-width:768px){
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        left: 0;
        padding: 10px;
    }
     @media screen and (max-width:450px){
        overflow-x: scroll;
        ::-webkit-scrollbar{
            display: none;
        }
        ul{
            width: 150%;
            button{
                margin: 0 15px;
            }
        }
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    list-style-type :none ;
    justify-content: space-between;
    width: 100%;
`;

const NavList = styled.button`
        display:flex;
        align-items: center;
        flex:1;
        position: relative;
        justify-content: center;
        a{
            display: flex;
            align-items:center;
            flex-direction: column;
            font-size: 16px;
            color: rgba(0,0,0,0.5);
            text-decoration: none;
        }
        &::after{
            position:absolute;
            content:"";
            bottom: -5%;
            width: 50%;
            height:4px;
            border-radius: 10%;
            left: 25%;
            opacity: 0;
            background: #000;
            transition: .3s ease-in;
        }
        &:hover{
            a {
                color: #000;
            }
        }

        &:focus{
            &::after{
                width: 100%;
                left: 0;
                opacity: 1;
            }
             a {
                color: #000;
            }
        }
        &.header__avatar{
            a {
                flex-direction: row !important;
                .arrow__icon{
                    margin-bottom: -20px;
                }
            }
            &:hover{
                a{
                    div{
                        display:block;
                    }
                }
            }
            @media screen and (max-width:768px){
                position: fixed;
                top: 0%;
                left: 80%;
            }
            @media screen and (max-width:450px){
                position: fixed;
                right: 0;
                z-index: 1000;
                left:60%;
            }
        }
`;

const SignOut = styled.div`
    position: absolute;
    bottom:-95%;
    width:100px;
    background: #fff;
    padding: 10px;
    border: 1px solid #000016;
    font-size:16px;
    font-weight: bold;
    cursor: pointer;
    display:none;
`;

const mapToStateProps = (state) => {
    return {
        user: state.userState.user
    }
}

const mapToStateDispatch = (dispatch) => ({
    signOut: () => dispatch(signOutApi())
});


export default connect(mapToStateProps, mapToStateDispatch)(Header);