import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'
import './Navbar.css'

const navLinks = [
	{ path: '/features', label: 'Features' },
	{ path: '/solutions', label: 'Solutions' },
	{ path: '/pricing', label: 'Pricing' },
	{ path: '/integrations', label: 'Integrations' },
	{ path: '/security', label: 'Security' },
]

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()

	return (
		<nav className="navbar">
			<div className="container navbar-container">
				<Link to="/" className="navbar-brand">
					<div className="navbar-logo">
						<Shield size={28} />
					</div>
					<span className="navbar-brand-text">Aingran</span>
					<span className="navbar-product-badge">CCM</span>
				</Link>

				<div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
					<ul className="navbar-links">
						{navLinks.map((link) => (
							<li key={link.path}>
								<Link
									to={link.path}
									className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<div className="navbar-actions">
						<Link to="/contact" className="btn btn-secondary" onClick={() => setIsOpen(false)}>
							Get a Demo
						</Link>
						<Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
							Start Free
						</Link>
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
