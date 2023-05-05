import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import BackArrow from "../assets/reactSvgs/BackArrow";

const StyledChatHeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    position: relative;
`
const StyledBackDiv = styled.div`
    position: absolute;
    left: 15px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
        transform: scale(1.2);
        svg {
            fill: red;
        }
    }
`;
const StyledTitle = styled.div``;
const ChatHeader = (props) => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    }

    return <StyledChatHeaderDiv>
        <StyledBackDiv onClick={handleBackClick}>
            <BackArrow size={20}/>
        </StyledBackDiv>
        <StyledTitle>
            Header
        </StyledTitle>
    </StyledChatHeaderDiv>

}

export default ChatHeader;