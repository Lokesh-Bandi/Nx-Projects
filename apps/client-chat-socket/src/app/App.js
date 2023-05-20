import ChatBox from "../components/ChatBox";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from "../pages/Layout";
import Login from "../pages/Login";



export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Login />} />
            <Route path='/chat' element={<ChatBox />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
