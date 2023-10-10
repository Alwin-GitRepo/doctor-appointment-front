import { Route, Routes } from 'react-router-dom';
import './App.css';
import DoctorList from './Components/DoctorsList/DoctorList';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import DoctorView from './Components/DoctorView/DoctorView';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path='/' element={<DoctorList/>} />
            <Route path='/view/:id' element={<DoctorView/>} />
        </Routes>
      {/* <DoctorList />  */}
      <Footer />
    </div>
  );
}

export default App;
