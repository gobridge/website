
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
   <div className="m-2 App">
      <Navbar />
      
      {/* <Routes>
         <Route>
            <Route path="/" element={<Home />} />
         </Route>
      </Routes>

      <Footer/> */}
   </div>
  );
}

export default App;
