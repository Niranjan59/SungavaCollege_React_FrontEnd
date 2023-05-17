// import './App.css';

import Index from "./component/Index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentAchievment from "./component/studentAchievment/StudentAchievment";
import TeacherLogin from "./component/teacherlogin/TeacherLogin";
import Admission from "./component/admission/Admission";
import NewsEvent from "./component/newsEvent/NewsEvent";
import ClzContact from "./component/clzContact/ClzContact";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/StudentAchievment' element={<StudentAchievment />} />
          <Route path='/teacherLogin' element={<TeacherLogin />} />
          <Route path='/studentAdmission' element={<Admission />} />
          <Route path='/newsEvent' element={<NewsEvent />} />
          <Route path='/clzContact' element={<ClzContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
