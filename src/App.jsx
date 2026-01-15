import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
	return (
		<div className="app">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/terms" element={<TermsOfService />} />
					<Route path="/privacy" element={<PrivacyPolicy />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App

