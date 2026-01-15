import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const navLinks = [
	{ path: '#challenges', label: 'Challenges' },
	{ path: '#platform', label: 'Platform' },
	{ path: '#how-it-works', label: 'How It Works' },
	{ path: '#why-ccm', label: 'Why CCM' },
]

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const handleNavClick = (e, path) => {
		if (path.startsWith('#')) {
			e.preventDefault()
			const element = document.getElementById(path.substring(1))
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
			setIsOpen(false)
		}
	}

	const handleBrandClick = (e) => {
		e.preventDefault()
		// If on the home page, scroll to top
		const heroElement = document.getElementById('hero')
		if (heroElement) {
			heroElement.scrollIntoView({ behavior: 'smooth' })
		} else {
			// Navigate to home and then scroll to top
			window.location.href = '/'
		}
	}

	return (
		<nav className="navbar">
			<div className="container navbar-container">
				<a href="/" className="navbar-brand" onClick={handleBrandClick}>
					<div className="navbar-logo">
						<Shield size={28} />
					</div>
					<span className="navbar-brand-text">Aingran</span>
					<span className="navbar-product-badge">CCM</span>
				</a>

				<div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
					<ul className="navbar-links">
						{navLinks.map((link) => (
							<li key={link.path}>
								<a
									href={link.path}
									className="navbar-link"
									onClick={(e) => handleNavClick(e, link.path)}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
					<div className="navbar-actions">
						<a href="#contact" className="btn btn-secondary" onClick={(e) => handleNavClick(e, '#contact')}>
							Get a Demo
						</a>
						<a href="mailto:sales@aingran.com" className="btn btn-primary" onClick={() => setIsOpen(false)}>
							Contact Us
						</a>
						<ThemeToggle />
					</div>
				</div>

				<button
					className="navbar-toggle"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>
		</nav>
	)
}

export default Navbar
