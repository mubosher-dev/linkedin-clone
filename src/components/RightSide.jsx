import styled from "styled-components"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TagIcon from '@mui/icons-material/Tag';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const RightSide = (props) => {
    return (
        <RightSideContainer>
            <FollowCard>
                <Title>
                    <h2> Add to your feed </h2>
                    <LinkedInIcon />
                </Title>
                <FieldList>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#Linkedin</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </FieldList>
                <Recomendion>
                    View all recomendition
                    <ArrowRightAltIcon style={{ color: "blue" }} />
                </Recomendion>
                <BannerCard>

                </BannerCard>
            </FollowCard>
        </RightSideContainer>
    )
}

const RightSideContainer = styled.div`
    flex:0.35;
    @media screen and (max-width:768px){
     width :100% ;
    }
`;

const FollowCard = styled.div`
    text-align: center;
    border-radius:5px;
    padding: 12px;
    margin-bottom: 50px;
    width: 100%;
    box-shadow: 0 0 1px 1px var(--border-color);
    background: #fff;
`;

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h2{ 
        font-size: 16px;
        font-weight: 400;
    }
`;

const FieldList = styled.ul`
    margin-top: 10px;
    li{ 
        border-top: 1px solid rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        margin:12px 0;
        font-size: 14px;
        justify-content: space-between;
        & > div {
            display:flex;
            flex-direction: column;
            align-items:center;

            button {
                border: 1px solid rgba(0,0,0,0.5);
                margin-top:10px;
                padding: 10px 20px;
                border-radius: 45px;
                cursor: pointer;
                font-size: 16px;
                &:hover{
                    padding:9.9px 20px ;
                    background: rgba(0,0,0,0.3);
                }
            }
        }
    }
`;

const Avatar = styled(TagIcon)`
    font-size: 20px;
`;

const Recomendion = styled.a`
    display: flex;
    align-items: center;
    color:blue;
    justify-content: center;
`;

const BannerCard = styled.div`
    background: url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/digital-marketing-banner-template-design-41201d18578c3cd781702fa8b1203dcf_screen.jpg?ts=1617890111");
    background-size: cover;
    background-repeat:no-repeat;
    background-position: center;
    height: 200px;
    width: 100%;

`;

export default RightSide;