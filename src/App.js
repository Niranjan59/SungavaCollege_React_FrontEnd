// import './App.css';
import About from './component/about/About';
import NewAbout from './component/add_about/NewAbout';
import ExtraCurriculum from './component/extracurriculum/ExtraCurriculum';
import Home from './component/home/Home';
import LandingPage from './component/landingpage/landingpage';
import MiddleName from './component/middleName/MiddleName';
import Navbar from './component/navbar/Navbar';
import UpcommingEvent from './component/upcommingevent/UpcommingEvent';

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <LandingPage />
      <UpcommingEvent />
      <ExtraCurriculum />
      <MiddleName />
      <About />
      <NewAbout />

    </div>
  );
}

export default App;
