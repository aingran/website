import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import Integrations from './pages/Integrations'
import Security from './pages/Security'
import Contact from './pages/Contact'

function App() {
	return (
		<div className="app">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/features" element={<Features />} />
					<Route path="/solutions" element={<Solutions />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/integrations" element={<Integrations />} />
					<Route path="/security" element={<Security />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
