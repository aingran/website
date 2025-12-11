import { Link } from 'react-router-dom'
import { Shield, Linkedin, Twitter, Github, Mail } from 'lucide-react'
import './Footer.css'

const productLinks = [
	{ path: '/features', label: 'Features' },
	{ path: '/solutions', label: 'Solutions' },
	{ path: '/pricing', label: 'Pricing' },
	{ path: '/integrations', label: 'Integrations' },
]

const companyLinks = [
	{ path: '/security', label: 'Security & Trust' },
	{ path: '/contact', label: 'Contact' },
	{ path: '#', label: 'Privacy Policy' },
	{ path: '#', label: 'Terms of Service' },
]

const frameworkLinks = [
	{ path: '/solutions', label: 'SOC 2' },
	{ path: '/solutions', label: 'ISO 27001' },
	{ path: '/solutions', label: 'HIPAA' },
	{ path: '/solutions', label: 'PCI DSS' },
]

function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-grid">
					<div className="footer-brand">
						<Link to="/" className="footer-logo">
							<div className="footer-logo-icon">
								<Shield size={24} />
							</div>
							<span>Aingran CCM</span>
						</Link>
						<p className="footer-description">
							Automate Compliance. Prove Trust. Define controls, collect evidence,
							catch violations, and pass audits faster.
						</p>
						<div className="footer-social">
							<a href="#" className="social-link" aria-label="LinkedIn">
								<Linkedin size={20} />
							</a>
							<a href="#" className="social-link" aria-label="Twitter">
								<Twitter size={20} />
							</a>
							<a href="#" className="social-link" aria-label="GitHub">
								<Github size={20} />
							</a>
							<a href="mailto:sales@aingran.com" className="social-link" aria-label="Email">
								<Mail size={20} />
							</a>
						</div>
					</div>

					<div className="footer-links-group">
						<h4 className="footer-links-title">Product</h4>
						<ul className="footer-links">
							{productLinks.map((link) => (
								<li key={link.label}>
									<Link to={link.path}>{link.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-links-group">
						<h4 className="footer-links-title">Frameworks</h4>
						<ul className="footer-links">
							{frameworkLinks.map((link) => (
								<li key={link.label}>
									<Link to={link.path}>{link.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-links-group">
						<h4 className="footer-links-title">Company</h4>
						<ul className="footer-links">
							{companyLinks.map((link) => (
								<li key={link.label}>
									<Link to={link.path}>{link.label}</Link>
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
