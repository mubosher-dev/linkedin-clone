import styled from "styled-components";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import db from '../firebase'
import { useState } from "react"


function LikeBTN(props) {

    const [like, setLike] = useState(false);

    const addLike = () => {
        if (like) {
            db.collection("linkedin").doc(props.id).update({
                like: props.like - 1,
            })
            setLike(false)
        }
        else {
            db.collection("linkedin").doc(props.id).update({
                like: props.like + 1,
            })
            setLike(true)
        }
    }

    return (
        <Add>
            <ThumbUpOutlinedIcon className={like ? "blue" : "#000"} onClick={addLike} />
            <sub> {props.like} like </sub>
        </Add>
    )
}

const Add = styled.span`
    .blue{
        color:blue !important;
    }
`;

export default LikeBTN;