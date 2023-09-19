import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/sign-up/Signup";
import Login from "./pages/log-in/Login";
import Menu from "./pages/menu/Menu";
import Mining from "./pages/mining/Mining";
import MiningTrack from "./pages/mining-track/Miningtrack";
import Marketplace from "./pages/market-place/Marketplace";
import Profile from "./pages/profile/Profile";
import Chat from "./pages/chat/Chat";
import Cardpage from "./pages/card-page/Cardpage";









function App() {
  return (

   
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route path='/sign-up' element={<Signup/>} />
      <Route path='/log-in' element={<Login/>} />
      <Route path='/menu'   element={<Menu/>}/>
      <Route path='/mining' element={<Mining/>}/>
      <Route path='/mining-track' element={<MiningTrack/>}/>
      <Route path='/market-place' element={<Marketplace/>} />
      <Route path='/profile-page' element={<Profile/>} />
      <Route path='/chat' element={<Chat/>} />
      <Route path='/card-page' element={<Cardpage/>} />
           
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
