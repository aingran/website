import { Link } from 'react-router-dom'
import { Shield, Linkedin, X, Github, Mail } from 'lucide-react'
import './Footer.css'

const productLinks = [
	{ path: '#challenges', label: 'Challenges' },
	{ path: '#platform', label: 'Platform' },
	{ path: '#how-it-works', label: 'How It Works' },
	{ path: '#why-ccm', label: 'Why CCM' },
]

const companyLinks = [
	{ path: '#testimonials', label: 'Testimonials' },
	{ path: '#contact', label: 'Contact' },
	{ path: '/privacy', label: 'Privacy Policy' },
	{ path: '/terms', label: 'Terms of Service' },
]

const frameworkLinks = [
	{ path: '#challenges', label: 'SOC 2' },
	{ path: '#challenges', label: 'ISO 27001' },
	{ path: '#challenges', label: 'HIPAA' },
	{ path: '#challenges', label: 'PCI DSS' },
]

function Footer() {
	const currentYear = new Date().getFullYear()

	const handleNavClick = (e, path) => {
		if (path.startsWith('#') && path !== '#') {
			e.preventDefault()
			const element = document.getElementById(path.substring(1))
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-grid">
					<div className="footer-brand">
						<Link to="/" className="footer-logo" aria-label="Aingran CCM Home">
							<div className="footer-logo-icon">
								<Shield size={24} aria-hidden="true" />
							</div>
							<span>Aingran CCM</span>
						</Link>
						<p className="footer-description">
							Automate Compliance. Prove Trust. Define controls, collect evidence,
							catch violations, and pass audits faster.
						</p>
						<div className="footer-social">
							<a 
								href="https://linkedin.com/company/aingran" 
								className="social-link" 
								aria-label="LinkedIn"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin size={20} aria-hidden="true" />
							</a>
							<a 
								href="https://x.com/aingran" 
								className="social-link" 
								aria-label="X (formerly Twitter)"
								target="_blank"
								rel="noopener noreferrer"
							>
								<X size={20} aria-hidden="true" />
							</a>
							<a 
								href="https://github.com/aingran" 
								className="social-link" 
								aria-label="GitHub"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github size={20} aria-hidden="true" />
							</a>
							<a 
								href="mailto:sales@aingran.com" 
								className="social-link" 
								aria-label="Email"
							>
								<Mail size={20} aria-hidden="true" />
							</a>
						</div>
					</div>

					<div className="footer-links-group">
						<h4 className="footer-links-title">Product</h4>
						<ul className="footer-links">
							{productLinks.map((link) => (
								<li key={link.label}>
									<a href={link.path} onClick={(e) => handleNavClick(e, link.path)}>{link.label}</a>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-links-group">
						<h4 className="footer-links-title">Frameworks</h4>
						<ul className="footer-links">
							{frameworkLinks.map((link) => (
								<li key={link.label}>
									<a href={link.path} onClick={(e) => handleNavClick(e, link.path)}>{link.label}</a>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-links-group">
						<h4 className="footer-links-title">Company</h4>
						<ul className="footer-links">
							{companyLinks.map((link) => (
								<li key={link.label}>
									{link.path.startsWith('/') ? (
										<Link to={link.path}>{link.label}</Link>
									) : (
										<a href={link.path} onClick={(e) => handleNavClick(e, link.path)}>{link.label}</a>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="footer-bottom">
					<p>&copy; {currentYear} Aingran. All rights reserved.</p>
					<div className="footer-badges">
						<span className="trust-badge">SOC 2</span>
						<span className="trust-badge">ISO 27001</span>
						<span className="trust-badge">HIPAA</span>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
