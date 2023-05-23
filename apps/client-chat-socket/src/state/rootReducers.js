import { combineReducers } from "redux";
import messagesReducer from "./reducers/messagesReducer";

const rootReducer = combineReducers({
    messagesReducer
})

export default rootReducer;