import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import DetailedPost from './Components/DetailedPost';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/signup" Component={Signup}/>
          <Route path="/signin" Component={Signin}/>
          <Route path="/DetailedPost" Component={DetailedPost}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;