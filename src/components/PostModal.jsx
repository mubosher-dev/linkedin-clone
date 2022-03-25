import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideocamIcon from '@mui/icons-material/Videocam';
import CommentIcon from '@mui/icons-material/Comment';
import ReactPlayer from "react-player"
import { useState } from "react";
import { connect } from "react-redux"
import firebase from "firebase";
import { postImgApi } from "../actions"
import db, { storage } from "../firebase"


const PostModal = (props) => {

    const [editor, setEditor] = useState("");

    const [shareImg, setShareImg] = useState(null);

    const [videoLink, setVideoLink] = useState("");

    const [videoShow, setVideoShow] = useState(false);

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === "" || image === undefined) {
            alert(`Not have image ${typeof image}`)
            return
        }
        setShareImg(image)
    }

    const reset = (e) => {
        setEditor(" ");
        setVideoLink(null);
        setShareImg(null);
        props.handle(e);
    }

    const videoBtn = () => {
        if (videoShow) {
            setVideoShow(false)
        }
        else {
            setVideoShow(true)
        }
    }

    const addPost = (e) => {

        console.log(e);

        e.preventDefault();
        if (shareImg !== null) {
            const upload = storage.ref(`images/${shareImg.name}`).put(shareImg);
            upload.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                (err) => alert(err),
                async () => {
                    const downloadURL = await upload.snapshot.ref.getDownloadURL();
                    db.collection("linkedin").add({
                        username: props.user.displayName,
                        userImg: props.user.photoURL,
                        email: props.user.email,
                        date: firebase.firestore.FieldValue.serverTimestamp(),
                        description: editor,
                        like: 0,
                        video: videoLink,
                        postImg: downloadURL,
                    });
                }
            );
        }
        else {
            db.collection("linkedin").add({
                username: props.user.displayName,
                userImg: props.user.photoURL,
                email: props.user.email,
                date: firebase.firestore.FieldValue.serverTimestamp(),
                description: editor,
                like: 0,
                video: videoLink,
                postImg: "",
            });
            setVideoShow(false)
        }
        reset(e);
    }

    return (
        <>
            <PostModalWrapper className={props.modal === "open" ? "show" : ""}>
                <Content>
                    <PostHeader>
                        <h2> Create a post </h2>
                        <button onClick={(e) => reset(e)}>
                            <CloseIcon />
                        </button>
                    </PostHeader>
                    <SharedContent>
                        <UserInfo>
                            <Avatar src={props.user?.photoURL} />
                            <span>{props.user?.displayName}</span>
                        </UserInfo>
                        <Editor>
                            <textarea value={editor}
                                placeholder="write a post"
                                onChange={e => setEditor(e.target.value)}
                            />
                            <AddImg>
                                <input type="file" accept="image/gif, image/jpeg,  image/png"
                                    name="image"
                                    onChange={handleChange}
                                    id="file"
                                    style={{ display: "none" }}
                                />

                            </AddImg>

                        </Editor>
                        {shareImg && <img
                            className="upload__img"
                            src={URL.createObjectURL(shareImg)} />}
                        {videoShow ? (
                            <>
                                <input
                                    type="text"
                                    className="videoInput"
                                    value={videoLink}
                                    placeholder="enter a video url"
                                    onChange={e => setVideoLink(e.target.value)}
                                />
                            </>
                        ) : <></>}
                        {videoLink && <ReactPlayer
                            url={videoLink}
                            width={"100%"}
                        />}
                    </SharedContent>
                    <SharedCreation>
                        <AttachButton>
                            <IconButton>
                                <label htmlFor="file" style={{ zIndex: "10000" }}>
                                    <AddPhotoAlternateIcon />
                                </label>
                            </IconButton>
                            <IconButton
                                onClick={videoBtn}
                            >
                                <VideocamIcon

                                />
                            </IconButton>
                        </AttachButton>

                        <SharedComment>
                            <IconButton>
                                <CommentIcon />
                                Anyone
                            </IconButton>
                        </SharedComment>
                        <p onClick={e => addPost(e)}>
                            <PostButton
                                disabled={editor ? true : false}>
                                Post
                            </PostButton>
                        </p>
                    </SharedCreation>
                </Content>
            </PostModalWrapper>
        </>
    )
}

const PostModalWrapper = styled.div`
    position:fixed;
    top:-400%;
    left:0;
    right:0;
    z-index:90900;
    height:100vh;
    color: #000;
    background-color:rgba(0,0,0,0.7);

    &.show {
        top:0;
    }
`;

const Content = styled.div`
    width:100%;
    max-width:80%;
    max-height:90%;
    background-color: #fff;
    margin:20px auto;
    overflow:initial;
    border-radius:5px;
    position:relative;
    display:flex;
    flex-direction: column;
    box-shadow:0 0 1px var(--border-color);

    @media screen and (max-width:450px){
        width: 100%;
        max-width:98% !important;
        margin: 20px 5px !important;
    }
`;


const PostHeader = styled.div`
    display: flex;
    padding:14px 26px;
    border-bottom: 1px solid var(--border-color);
    font-size:16px;
    justify-content: space-between;
    align-items:center;

    button {
        font-size:16px !important;
        color:#000016;
        cursor:pointer;
    }
`;

const SharedContent = styled.div`
    display: flex;
    flex-direction:column;
    overflow-y:auto;
    padding:8px 12px;
    position: relative;
    .upload__img {
        padding:1rem 1.5rem;
        width:100%;
        height: 300px;
        object-fit: fill;
        object-position:center;

        @media screen and (max-width:768px) {
         object-fit:contain;
        }
    }

    .videoInput {
        border:1px solid var(--border-color);
        padding:10px 15px;
        color:#000;
        width: 95%;
        font-size:16px;
        margin:10px auto;

        @media screen and (max-width:768px){
            max-width: 500px;
        }
    }
`;

const UserInfo = styled.div`
    display:flex;
    align-items:center;
    padding:12px 24px;

    span {
        font-weight:700;
        font-size: 17px;
        margin:0 10px;
    }
`;

const SharedCreation = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:12px 2px 12px 14px;

    @media screen and (max-width:768px) {
        justify-content:center;
    }
`;

const AttachButton = styled.div`
    display:flex;
    align-items:center;
    padding:10px 20px;

    @media screen and (max-width:768px){
        padding:0;
    }
`;

const IconButton = styled.button`
    font-size:20px;
    border:1px solid var(--border-color);
    width:100px;
    cursor:pointer;

       @media screen and (max-width:768px){
           flex:0.3;
           width: inherit;
           border:none;
           margin:0 10px;
    }
`;

const SharedComment = styled.div`
    padding-right:10px;
    border-left: 1px solid var(--border-color);
    button {
        display:flex;
        align-items: center;
    }
`;

const PostButton = styled.button`
    padding:10px 20px;
    background-color:${(props) => (props.disabled ? "rgb(0,0,200)" : "grey")};
    color: ${(props) => (props.disabled ? "#fff" : "#000")};
    font-size:16px;
    border-radius:45px;
    min-width: 60px;
    margin: 0 20px;
    cursor:pointer;
`;

const Editor = styled.div`
    width:100%;
    padding:10px 25px;
    display: flex;
    justify-content: center;
    textarea{
        font-size: 16px;
        border:1px solid var(--border-color);
        height: 90px !important;
        width:100% !important;
        padding: 5px 10px;

        &:focus {
            border: 1px solid blue;
        }
    }
`;

const AddImg = styled.div``;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);