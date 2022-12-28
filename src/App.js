import { BrowserRouter as Router, Routes, Route,Link,Outlet} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LearnMore from './components/Home/LearnMore';
import Menu from './components/Menu/Menu';
import ContactUs from './components/ContactUs/ContactUs';
function App() {
  return (
    <div className="App">
        <Router>
     <Header/>
     <Routes>
         <Route element={<Home/>} path="/" exact/>
         <Route element={<LearnMore/>} path="/learnMore" exact/>
         <Route element={<Menu/>} path="/menu" exact/>
         <Route element={<ContactUs/>} path="/contactUs" exact/>
   </Routes>
</Router>
    </div>
  );
}

export default App;
