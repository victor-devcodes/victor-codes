import { Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import HomePage from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Services from './pages/Services'
import PricingPage from './pages/Pricing'
import ContactPage from './pages/Contact'
import ConsultationPage from './pages/BookConsultation'

import ScrollToTop from './components/ui/ScrollToTop'
import WhatsAppButton from './components/ui/WhatsAppButton'

import StructuredData from './components/seo/StructuredData'


function App() {
  return (
    
    <div className="min-h-screen bg-white text-slate-950">
     
      <StructuredData/>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-consultation" element={<ConsultationPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />

      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}

export default App
