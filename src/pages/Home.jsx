import { useState } from 'react'
import { ArrowRight, Rocket } from 'lucide-react'
import Testimonial from '../components/Testimonial'
import dashboardDark from '../assets/images/dashboard.png'
import dashboardLight from '../assets/images/dashboard_light.png'
import ImageModal from '../components/ImageModal'
import ChallengesShowcase from '../components/ChallengesShowcase'
import OnePlatformShowcase from '../components/OnePlatformShowcase'
import HowItWorksFactory from '../components/HowItWorksFactory'
import KeyValueShowcase from '../components/KeyValueShowcase'
import { useTheme } from '../context/ThemeContext'
import './Home.css'

const trustBadges = ['SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS', 'SOX']

function Home() {
	const { theme } = useTheme()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const dashboardImg = theme === 'dark' ? dashboardDark : dashboardLight

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className="page home-page">
			{/* Hero Section */}
			<section id="hero" className="hero">
				<div className="container">
					<div className="hero-content">
						<div className="hero-badge">
							<span className="badge">
								<Rocket size={14} aria-hidden="true" />
								Modern Compliance Platform
							</span>
						</div>
						<h1 className="hero-title">
							Continuous Controls Monitoring — from periodic checks to continuous enterprise assurance
						</h1>
						<p className="hero-subtitle">
							Aingran's CCM is an enterprise-grade Continuous Controls Monitoring platform that continuously evaluates critical business and financial controls across core enterprise processes such as Procure-to-Pay and Order-to-Cash, detects exceptions in near real time, and automatically captures audit-ready evidence across ERP and source systems.
						</p>
						<div className="hero-actions">
							<a href="#contact" className="btn btn-primary btn-lg">
								Request a Demo
								<ArrowRight size={20} aria-hidden="true" />
							</a>
							<a href="#platform" className="btn btn-secondary btn-lg">
								Explore the Platform
							</a>
						</div>
						<div className="trust-badges">
							{trustBadges.map((badge) => (
								<span key={badge} className="trust-badge">{badge}</span>
							))}
						</div>
					</div>
					<div className="hero-visual">
						<div className="hero-dashboard" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
							<img
								src={dashboardImg}
								alt="Aingran CCM Dashboard"
								className="hero-dashboard-img"
								width="800"
								height="600"
							/>
						</div>
					</div>
				</div>
			</section>

			<ImageModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				imageSrc={dashboardImg}
				altText="Aingran CCM Dashboard"
			/>

			{/* Compliance Challenges */}
			<section id="challenges">
				<ChallengesShowcase />
			</section>

			{/* One Platform - Built for Teams */}
			<section id="platform">
				<OnePlatformShowcase />
			</section>

			{/* How it Works - Assembly Line */}
			<section id="how-it-works">
				<HowItWorksFactory />
			</section>

			{/* Key Value Statements */}
			<section id="why-ccm">
				<KeyValueShowcase />
			</section>

			{/* Social Proof */}
			<section id="testimonials" className="section social-proof">
				<div className="container">
					<p className="social-proof-label">Trusted by security & compliance teams worldwide</p>
					<div className="testimonial-wrapper">
						<Testimonial
							quote="CCM reduced our audit prep time by 60% and gave us continuous visibility into control health."
							author="Sarah Johnson"
							role="Director of Security"
							company="TechCorp Inc."
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section id="contact" className="section cta-section">
				<div className="container">
					<div className="cta-box">
						<h2>Ready to automate your compliance?</h2>
						<p>Join teams who cut audit prep time by 50-70% with Aingran CCM.</p>
						<div className="cta-actions">
							<a href="mailto:sales@aingran.com" className="btn btn-primary btn-lg">
								Book a 30-minute Demo
								<ArrowRight size={20} aria-hidden="true" />
							</a>
							<a href="#why-ccm" className="btn btn-secondary btn-lg">
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
