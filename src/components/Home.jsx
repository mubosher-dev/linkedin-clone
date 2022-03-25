import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";
import { connect } from "react-redux"
import { useEffect } from "react";
import { changePage } from "../changePage"

const Home = (props) => {

    changePage("Linkedin Home")

    const navigate = useNavigate();

    useEffect(() => {
        if (!props.user) {
            navigate("/")
        }
    }, [])

    return (
        <>
            <Header />
            <HomeWrapper>
                <Section>
                    <h3>
                        Hiring a happy
                    </h3>
                    <p>
                        Find a talented props time with Upwork and keep business moving
                    </p>
                </Section>
                <Layout>
                    <LeftSide />
                    <Main />
                    <RightSide />
                </Layout>
            </HomeWrapper>
        </>

    )
}

const HomeWrapper = styled.div``;

const Section = styled.section`
        padding-top: 5%;
        max-width: 100%;
        box-sizing: content-box;
        display: flex;
        justify-content: center;
        text-decoration: underline;
        align-items: center;
        h3{
            color: blue;
            margin: 0 10px;
        }
        p{
            font-weight: 700;
        }

        @media screen and (max-width:768px){
            padding-top: 52px !important;
            flex-direction: column;
            padding: 0 30px;
            p{
                text-align: center;
            }
        }
    `;

const Layout = styled.div`
    display: flex;
    margin: 25px 0;
    padding: 20px;
    @media screen and (max-width:768px){
        display: flex;
        align-items:center;
        flex-direction: column;
        padding: 1rem;
        .rightside {
            width: 100% !important;
            margin:20px 0;
        }
        div {
            border-radius:0 !important;
        }
    }

    @media screen and (max-width:450px){
        padding:0 !important;
    }
`;

const mapStateProps = (state) => {
    return {
        user: state.userState.user,
    }
}

export default connect(mapStateProps)(Home);