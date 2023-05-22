import axios from "axios";
const serverAddress = 'http://localhost:5500';

const sendUserInfo = async (data, socketID) => {
   console.log(data)
   let resposne = await axios.post(`${serverAddress}/login`, {...data, socketID});
   return resposne;
}


export { sendUserInfo };