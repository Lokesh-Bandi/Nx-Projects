import { Global, css } from '@emotion/react';
import SideBar from '../components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import DynamicFormComponent from '../pages/DynamicFormComponent';
import SpiralAlgo from '../pages/SpiralAlgo';
import { SocketClient } from '../pages/SocketClient';



export function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<DynamicFormComponent />} />
          <Route path='/spiralAlgoAnimation' element={<SpiralAlgo />} />
          <Route path='/socketClient' element={<SocketClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
