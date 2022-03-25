import { useEffect, useState } from "react"
import styled from "styled-components"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from "@mui/material";
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import SendIcon from '@mui/icons-material/Send';
import PostModal from "./PostModal"
import { connect } from "react-redux"
import db from '../firebase'
import ReactPlayer from "react-player"
import LikeBTN from "./LikeBTN";


const Main = (props) => {

    const [modal, setModal] = useState("close");

    const handleClick = (e) => {
        e.preventDefault();
        switch (modal) {
            case "open":
                setModal("close")
                break;
            case "close":
                setModal("open")
                break;
            default:
                setModal("close");
        }
    }

    const [post, setPosts] = useState([])


    useEffect(() => {
        db.collection("linkedin").orderBy("date", "asc")
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        name: doc.data(),
                    }))
                );
            })
    }, [])


    console.log(post)

    return (
        <MainContainer>
            <Sharebox>
                <div className="header">
                    <img src={props.user?.photoURL} />
                    <button
                        onClick={handleClick}
                    >Create a post</button>
                </div>
                <div>
                    <button>
                        <AddPhotoAlternateIcon style={{ color: "blue" }} />
                        <span> Photo </span>
                    </button>
                    <button>
                        <PhotoCameraIcon style={{ color: "green" }} />
                        <span> Video </span>
                    </button>
                    <button>
                        <AddLocationAltIcon style={{ color: "orange" }} />
                        <span> Date </span>
                    </button>
                    <button>
                        <DateRangeIcon style={{ color: "pink" }} />
                        <span> Write a article </span>
                    </button>
                </div>
            </Sharebox>
            <div>
                {post.map((post, index) => (
                    <Article key={index}>
                        <SharedActorBox>
                            <a>
                                <Avatar
                                    src={post.name.userImg}
                                    alt="Logo"
                                />
                                <div>
                                    <span> {post.name.username} </span>
                                    <span> {post.name.email} </span>
                                    <span> {new Date(post.name.date?.toDate()).toUTCString()} </span>
                                </div>
                            </a>
                            <button>
                                <MoreHorizIcon />
                            </button>
                        </SharedActorBox>
                        <Description> {post.name.description} </Description>
                        <SharedImg>
                            <a>
                                {post.name.postImg ? (
                                    <img
                                        src={post.name.postImg}
                                        alt="shared__img"
                                    />
                                ) :
                                    (
                                        <ReactPlayer
                                            width={"100%"}
                                            url={post.name.video}
                                        />
                                    )
                                }

                            </a>
                        </SharedImg>
                        <SocialMedia>
                            <li>
                                <button>
                                    <LikeBTN id={post.id} like={post.name.like} />
                                </button>
                            </li>
                            <li>
                                <a>
                                    <InsertCommentOutlinedIcon />
                                    <sub> {post.name.comment} comment </sub>
                                </a>
                            </li>
                            <li>
                                <button>
                                    <ReplyAllIcon />
                                    <sub> Shared </sub>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <SendIcon className="send__icon" />
                                    <sub> Send </sub>
                                </button>
                            </li>
                        </SocialMedia>
                    </Article>
                ))}

            </div>
            <PostModal modal={modal} handle={handleClick} />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    flex:0.6;
    margin:0 20px;
    @media screen and (max-width:768px){
        width:100%;
        margin:10px 0;
    }
`;

const CommentCard = styled.div`
    text-align:center;
    margin-bottom:8px;
    background-color:#fff;
    position:relative;
    border-radius:5px;
    box-shadow: 0 0 1px 1px var(--border-color);
`;

const Sharebox = styled(CommentCard)`
    display:flex;
    flex-direction: column;
    margin: 0 0 8px;
    border-radius:5px;
    div:nth-child(1){
        display:flex;
        align-items:center;
        img{
            width: 100px;
            height: 100px;
            border-radius:100%;
            padding:10px;
            object-fit: contain;
        }
        button{
            width:80%;
            padding:10px 13px;
            border:1px solid #000;
            border-radius:45px;
            margin:0 10px;
            font-size:16px;
            text-align: left !important;
        }
    }

    div:nth-child(2){
        display:flex;
        align-items: center;
        justify-content:space-between;
        padding: 10px 20px;

        button {
            display: flex;
            align-items:center;
            font-size: 16px !important;
            justify-content:center;
            border-radius: 5px;
            span {
                cursor:pointer;
                border-radius:45px;
                color:rgb(40,40,200);
                font-size:15px;
            }
        }
    }
    @media screen and (max-width:768px){
         div:nth-child(2){
             padding: 10px 10px;
         }
    }
    @media screen and (max-width:450px){
         div:nth-child(2){
             overflow-x:scroll;
         }
    }
    
`;

const Article = styled(CommentCard)`
    padding:0;
    margin:0 0 8px;
`;

const SharedActorBox = styled.div`
    padding:10px;
    display:flex;
    border-radius:5px;
    box-shadow: 0 0 1px var(--border-color);
    align-items:center;
    a{
        flex-grow:1;
        display:flex;
        align-items:center;
          
          img{
              width:70px;
              object-fit:contain;
          }
          & > div {
            display:flex;
            flex-direction:column;
            margin-left:8px;

            span {
                text-align:left;
                font-size:14px;
                color:rgba(0,0,0,0.7);
                &:first-child{
                    font-size:14px;
                    font-weight: 700;
                    color:rgba(0,0,0,1)
                }
            }
        }
    }
    button{
        align-self:flex-start !important;
        font-size:16px !important;
    }
`;

const Description = styled.div`
    padding: 10px;
    color:#000;
    font-size:14px;
    text-align:left;
    font-weight: bold;
`;

const SharedImg = styled.div`
    margin-top:8px;
    display:block;
    background-color:#f9fafb;

    img{
        object-fit: contain;
        width:100%;
        height:100%;
    }
`;

const SocialMedia = styled.ul`
    list-style-type:none;
    display: flex;
    align-items:center;
    margin:0 16px;
    justify-content:space-between;
    padding:8px 0;

    li{
        margin-right:5px;
        font-size:20px;
        sub {
            font-size:16px;
        }
        button {
            display:flex;
            align-items:center;
         & > .send__icon{
             transform:rotate(-50deg) !important;
         }
        }
        a{
            display:flex;
            align-items:center;
        }
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main);