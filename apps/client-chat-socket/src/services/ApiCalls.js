import axios from "axios";
const serverAddress = 'http://localhost:5500';

const sendLoginUserInfo = async (data, socketID) => {
   console.log(data)
   let resposne = await axios.post(`${serverAddress}/login`, {...data, socketID});
   return resposne;
}

const sendSignUpUserInfo = async (data, socketID, userName) => {
   console.log(data)
   let resposne = await axios.post(`${serverAddress}/login/newUser`, {...data, socketID, userName});
   return resposne;
}


export { sendLoginUserInfo, sendSignUpUserInfo };