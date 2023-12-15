import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <div className="pages">
                <Routes>
                    <Route path='/' element={ <Home /> } />
    2           </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}
