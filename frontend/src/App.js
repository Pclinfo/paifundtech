import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import AlternativeInvestmentFunds from './Pages/Investments/AlternativeInvestmentFunds'
import PortfolioManagementService from './Pages/Investments/PortfolioManagementService'
import VentureCapital from './Pages/Our Business/VentureCapital'
import HedgeFunds from './Pages/Our Business/HedgeFunds'
import InsuranceFunds from './Pages/Our Business/InsuranceFunds'
import ProjectFunds from './Pages/Our Business/ProjectFunds'
import DebtFunds from './Pages/Our Business/DebtFunds'
import PrivateEquityFunds from './Pages/Our Business/PrivateEquityFunds'
import AccountingBusinessSupport from './Pages/Financial Consultant/AccountingBusinessSupport'
import Loan from './Pages/Financial Services/Loan'
import BusinessDigital from './Pages/Research Development/BusinessDigital'
import Footer from './Components/Footer/Footer';
// import Blog from './Pages/Blog/Blog'
import ContactUs from './Pages/ContactUs'




function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investments/alternative-investment-funds" element={<AlternativeInvestmentFunds />} />
          <Route path="/investments/portfolio-management-service" element={<PortfolioManagementService />} />
          <Route path="/our-business/venture-capital" element={<VentureCapital />} />
          <Route path="/our-business/hedge-funds" element={<HedgeFunds />} />
          <Route path="/our-business/insurance-funds" element={<InsuranceFunds />} />
          <Route path="/our-business/project-funds" element={<ProjectFunds />} />
          <Route path="/our-business/debt-funds" element={<DebtFunds />} />
          <Route path="/our-business/private-equity-funds" element={<PrivateEquityFunds />} />
          <Route path="/financial-services/loan" element={<Loan />} />
          <Route path="/financial-consultant/accounting-business-support" element={<AccountingBusinessSupport />} />
          <Route path="/research-development/business-digital" element={<BusinessDigital />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
