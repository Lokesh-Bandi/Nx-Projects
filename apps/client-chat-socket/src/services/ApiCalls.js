import axios from "axios";
const serverAddress = 'http://localhost:5500';

const sendUserInfo = async (data) => {
   console.log(data)
   let resposne = await axios.post(`${serverAddress}/login`, data);
   return resposne;
}

export { sendUserInfo };