const initialState = {
    messages: [
        { isUser: false , msg :"Hello..!  I'm a developer" }
    ]
}

const messagesReducer = (state =  initialState, action) => {
    switch(action.type){
        case 'NEW_MESSAGE':
            return {...state, messages: [{isUser: action.isUser, msg: action.msg},...state.messages]};
        default: 
            return state;
    }
}

export default messagesReducer;