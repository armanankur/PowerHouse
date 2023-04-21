
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About';
import Program from './Pages/ProgramPage/Program';
import Pricing from './Pages/PricingPage/Pricing';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Training from './Pages/TrainingPage/Training';


import Footer from './components/Footer/footer';
function App() {
    return (
        <div className="App">

            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/AboutUs' element={<About />} />
                <Route path='/Program' element={<Program />} />
                <Route path='/Training' element={<Training />} />
                <Route path='/Pricing' element={<Pricing />} />
                <Route path='/register' element={<Registration />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
