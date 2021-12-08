import './App.css';
import Home from './components/Home/Home';
// import MainFG from './components/Landing/MainFG';
// import Navbar from './components/Navbar/Navbar';
import HomeNavbar from './components/HomeNavbar/HomeNavbar';

function App() {
  return (
    <>
      {/* <MainFG/> */}
      <Home userName="Jaimin Gajjar" img="boy-pfp.jpg"/>
      <HomeNavbar/>
    </>
    
  );
}

export default App;
