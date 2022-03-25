import React, { useEffect } from 'react'
import styled from "styled-components";
import { changePage } from "../changePage";
import { connect } from "react-redux";
import { signInApi } from "../actions/index";
import { useNavigate } from "react-router-dom"

function Login(props) {

    changePage("Linkedin Login")

    const navigate = useNavigate();


    useEffect(() => {
        if (props.user) {
            navigate("/home")
        }
    })

    return (
        <LoginContainer>

            <Nav>
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/2560px-LinkedIn_Logo_2013.svg.png" alt="logo__img" />
                </a>
                <div>
                    <JoinNow> Join Now </JoinNow>
                    <SignIn> Sign In </SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1> Welcome to your professional community </h1>
                    <img src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="login__banner-img" />
                </Hero>
                <Form>
                    <Google onClick={() => props.signIn()}>
                        <img src="https://freesvg.org/img/1534129544.png" alt="google_img" />
                        Sign In With Google
                    </Google>
                </Form>
            </Section>
        </LoginContainer>
    )
}

const LoginContainer = styled.div``;

const Nav = styled.nav`
    max-width: 100%;
    margin: auto;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
        width: 125px;
        height: 30px;
        margin-left: 20px;

        img{
            width:100%;
            object-fit: cover;
            height: 100%;
        }
        div{
            display: flex;
        }
        @media screen and (max-width:768px){
            padding: 0 5px;
            width: 140px;
        }
         @media screen and (max-width:450px){
            padding: 0 5px;
            width: 100px;
            margin-right: 10px;
            img{
                width: 100px;
                object-fit: contain;
            }
        }
    }
    @media screen and (max-width:450px){
            justify-content: center;
        }
`;

const JoinNow = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    color: rgba(0,0,0,0.6);
    margin-right: 13px;
    cursor: pointer;
    border-radius: 4px;

    &:hover{
        background-color: rgba(0,0,0,0.05);
        color: rgba(0,0,0,0.9);
    }

    @media screen and (max-width:450px){
     padding: 10px; 
     margin-right  :0 ;
    }
`;

const SignIn = styled.button`
    color: blue;
    padding: 10px 20px;
    font-size: 16px;
    outline: none;
    border: 1px solid blue;
    border-radius: 998px;
    cursor: pointer;

    &:hover{
        padding: 9.9px 20px;
        background-color: lightblue;
    }

    @media screen and (max-width:450px){
        padding: 5px 10px;
    }
`;

const Section = styled.section`
    display: flex;
    align-items: center;
    min-height:700px;
    padding-bottom: 130px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;

    @media screen and (max-width:768px) {
     margin:auto ;
     margin-top: 0;
     min-height: 0;
     padding-top: 10px;
    }
`;

const Hero = styled.div`
    width: 100%;
    display: flex;
    padding: 30px;
    align-items: flex-start;
    justify-content: space-between;
    h1{
        width: 50%;
        font-size: 50px;
        color:#2977c8;
        font-weight: 500;

        @media screen and (max-width:768px) {
            text-align:center;
            font-size: 20px;    
            width: 100%;
            font-weight: bold;
            margin-right: 0;
            line-height: 2;
      }
    }

    img{
        z-index: 10;
        width: 70%;
        height: 500px;
        margin-right: -15%;
        @media screen and (max-width:768px) {
            width: 100%;
            height: 300px;
      }
    }
    @media screen and (max-width:768px) {
            flex-direction: column;
      }
`;

const Form = styled.div`
    margin-top: -250px;
    padding: 30px;

    @media screen and (max-width:768px) {
     margin-top :15px ;
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
    }
`;

const Google = styled.button`
    padding: 10px;
    display:flex;
    cursor: pointer;
    align-items: center;
    width: 350px;
    justify-content: center;
    border: 1px solid lightgray;
    font-size: 16px;
    border-radius: 45px;
    img{
        width: 40px;
        margin: 0 10px;
        object-fit: contain;
    }
    &:hover{
        border: 1px solid #000016;
    }

    @media screen and (max-width:458px) {
        width: 300px;
    }
`;

const mapStateProps = (state) => {
    return {
        user: state.userState.user
    };
}

const mapDispatchProps = (dispatch) => ({
    signIn: () => dispatch(signInApi()),
});


export default connect(mapStateProps, mapDispatchProps)(Login);