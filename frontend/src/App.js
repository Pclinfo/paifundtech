import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import PortfolioManagementServices from './Pages/PortfolioManagementServices'
import AlternativeInvestmentFunds from './Pages/AlternativeInvestmentFunds';
import Bonds from './Pages/Bonds';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio-management-services" element={<PortfolioManagementServices />} />
          <Route path="/alternative-investment-funds" element={<AlternativeInvestmentFunds />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
