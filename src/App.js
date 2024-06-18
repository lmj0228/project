import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import Info from "./info/Info";
import PublicArtMain from "./publicArt/PublicArtMain";
import Community from "./pages/Community";
import Project from "./pages/Project";
import SignUp from "./signUp/SignUp";
import Login from "./login/Login";
import logo2 from './images/logo2.png';
import PublicArtDetail from './publicArt/PublicArtDetail';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col 
                      w-full justify-start items-center 
                      h-screen mx-auto'>
        <header className='flex justify-between items-center
                           h-20 w-10/12 text-xl font-bold'>

          <div className='logo-container'>
            <Link to='/'>
              <img src={logo2} alt="logo2" className='logo2' />
            </Link>
          </div>

          <div className='flex justify-end'>
            <div className='mx-2 p-2 hover:text-sky-500'>
              <Link to='/p1'><p className='p1 hide-on-small-screen'>공공조형물</p></Link>
            </div>
            <div className='mx-2 p-2 hover:text-sky-500 rounded-md'>
              <Link to='/p2'><p className='p1 hide-on-small-screen'>둘러보기</p></Link>
            </div>
            <div className='mx-2 p-2 hover:text-sky-500 rounded-md'>
              <Link to='/p3'><p className='p1 hide-on-small-screen'>소통하기</p></Link>
            </div>
            <div className='mx-2 p-2 hover:text-sky-500 rounded-md'>
              <Link to='/p4'><p className='p1 hide-on-small-screen'>계획하기</p></Link>
            </div>
          </div>

          <div className='flex justify-end'>
            <div className='mx-2 p-2 hover:text-sky-500 rounded-md'>
              <Link to='/signUp'><p className='p2 hide-on-small-screen'>회원가입</p></Link>
            </div>
            <div className='mx-2 p-2 hover:text-sky-500 rounded-md'>
              <Link to='/login'><p className='p2 hide-on-small-screen'>로그인</p></Link>
            </div>
          </div>

        </header>

        <hr className='border-solid w-full' />

        <main className='grow flex flex-col w-full
                        justify-center items-center 
                        overscroll-y-auto'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/p1" element={<Info />} />
            <Route path="/p2" element={<PublicArtMain />} />
            <Route path="/p3" element={<Community />} />
            <Route path="/p4" element={<Project />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path='/publicArt' element={<PublicArtDetail />}  />
          </Routes>
        </main>

        <footer className='flex justify-center items-center
                          h-20 p-10 w-full text-base 
                          bg-black text-white'>
          ⓒ 2024 Ocean Squad. All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
