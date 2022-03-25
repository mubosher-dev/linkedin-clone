import styled from "styled-components";
import WidgetsIcon from '@mui/icons-material/Widgets';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import AddIcon from '@mui/icons-material/Add';
import { connect } from "react-redux";
import { Avatar } from "@mui/material";


const LeftSide = (props) => {
    return (
        <LeftSideContainer className="rightside">
            <ArrCard>
                <UserInfo>
                    <BackgroundCard />
                    <a>
                        {props.user ? <img src={props.user.photoURL} /> : ""}
                        <Link> Welcome {props.user ? props.user?.displayName : ""} </Link>
                    </a>
                    <a>
                        <PhotoText>
                            Add Photo
                        </PhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Check Your Network</span>
                        </div>
                        <WidgetsIcon />
                    </a>
                </Widget>
                <Item>
                    <TurnedInIcon className="itemIcon" />
                    <span>My Works</span>
                </Item>
            </ArrCard>

            <CommunityCard>
                <a>
                    <span> Groups </span>
                </a>
                <a>
                    <span> Events </span>
                    <AddIcon />
                </a>
                <a>
                    <span> Follow Hashtags </span>
                </a>
                <a>
                    <span> Discover More </span>
                </a>
            </CommunityCard>
        </LeftSideContainer>
    )
}

const LeftSideContainer = styled.div`
   flex:0.35;
`;
const ArrCard = styled.div`
    text-align:center;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 5px;
    position: relative !important;
    width: 100%;
    box-shadow: 0 0 1px 1px var(--border-color);

`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.6);
    padding: 12px 12px 16px;
    position: relative;

    img {
        z-index: 10;
        position: relative;
        border-radius: 50%;
        width: 80px;
        object-fit: contain;
        margin-top: 20px;
    }
`;

const BackgroundCard = styled.div`
    height: 80px;
    background: linear-gradient(20deg,rgb(160,180,183),rgb(217,229,231),rgb(191,211,214));
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
`;

const Photos = styled.div`
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/High-contrast-camera-photo.svg/2048px-High-contrast-camera-photo.svg.png");
    width: 72px;
    height: 73px;
    background-size: 50px;
    position: relative;
    z-index: 10;
    margin: auto;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 30px !important;
    margin:0 auto;
    display: inline-block !important;
    background-color: #fff;
    border-radius: 5px;
`;

const PhotoText = styled.div`
    color: rgb(50,50,200);
    margin-top: 4px;
    line-height: 3.33;
    font-weight: 400;
`;

const Link = styled.div`
    font-size: 18px;
    color: rgba(0,0,0,0.9);
    font-weight: bold;
`;

const Widget = styled.div`
    padding: 15px;
    a {
        display: flex;
        align-items:center;
        justify-content: space-between;
        div{
             span:nth-child(2){
                font-weight: bold;
            }
            span{
                display: block;
                text-align: left;
            }
           
        }
    }
    &:hover{
        background: rgba(0,0,0,0.2);
    }
`;

const Item = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 15px;
    border-top:1px solid rgba(0,0,0,0.6);

    span {
        font-weight: bold;
    }

    &:hover{
        background: rgba(0,0,0,0.2);
    }
`;

const CommunityCard = styled.div`
    padding: 12px 12px 16px;
    background: #fff;
    display:flex;
    border-radius: 5px;
    flex-direction: column;
    box-shadow: 0 0 1px 1px rgba(0,0,0,0.5);
    a{
        display:inline-flex;
        justify-content: space-between;
        padding: 4px 12px;

        &:hover{
            color: rgb(0,0,100);
        }
        &:last-child{
            color: rgba(0,0,0,0.4);
            padding: 12px;
            border-top:1px solid rgba(0,0,0,0.5);

            &:hover{
                color: rgba(0,0,0,0.4);
                background: rgba(0,0,0,0.3);
            }
        }
    }

`;

const mapToStateProps = (state) => {
    return {
        user: state.userState.user,
    }
}

export default connect(mapToStateProps)(LeftSide);