import styled from "@emotion/styled";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";

const StyledChatDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border: 2px solid ${props => props.theme.container.bgColor};
    background: ${props => props.theme.header.bgColor};
    font-family: "Times New Roman", Times, serif;
    border-radius: 15px;
    box-sizing: border-box;
`

const ChatBox = () => {

    return <StyledChatDiv>
        <ChatHeader />
        <ChatBody />
    </StyledChatDiv>

}

export default ChatBox;