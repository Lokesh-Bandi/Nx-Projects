import styled from "@emotion/styled";
import InputDiv from "./ChatBodyComponents/InputDiv";
import MessagesContent from "./ChatBodyComponents/MessagesContent";

const StyledChatBodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    flex-grow: 1;
    width: 100%;
    background: ${props => props.theme.body.bgColor};
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`

const ChatBody = () => {

    return <StyledChatBodyDiv>
        <MessagesContent />
        <InputDiv />
    </StyledChatBodyDiv>

}

export default ChatBody;