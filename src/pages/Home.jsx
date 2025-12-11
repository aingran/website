import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
	Shield,
	Database,
	AlertTriangle,
	BarChart3,
	ArrowRight,
	Plug,
	FileCheck,
	Bell,
	Users,
	Settings,
	CheckCircle2,
	Cloud,
	Key,
	Code,
	Ticket,
	Lock
} from 'lucide-react'
import FeatureCard from '../components/FeatureCard'
import Testimonial from '../components/Testimonial'
import dashboardImg from '../assets/images/dashboard.png'
import ImageModal from '../components/ImageModal'
import './Home.css'

const trustBadges = ['SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS', 'SOX']

const valuePillars = [
	{
		icon: Database,
		title: 'Single Source of Truth',
		description: 'Centralize control definitions, owners, and mappings across frameworks.'
	},
	{
		icon: FileCheck,
		title: 'Automated Evidence',
		description: 'Collect, normalize, and version evidence with review workflows.'
	},
	{
		icon: AlertTriangle,
		title: 'Continuous Monitoring',
		description: 'Detect violations as they happen with alerts and queues.'
	},
	{
		icon: BarChart3,
		title: 'Audit-Ready Reporting',
		description: 'Real-time dashboards, exports, and auditor views.'
	}
]

const howItWorks = [
	{ step: 1, title: 'Connect', description: 'Integrate your stack to stream signals and artifacts.' },
	{ step: 2, title: 'Define', description: 'Create and assign controls with clear success criteria.' },
	{ step: 3, title: 'Collect', description: 'Automate evidence capture and review cycles.' },
	{ step: 4, title: 'Detect', description: 'Flag violations and route for remediation.' },
	{ step: 5, title: 'Prove', description: 'Generate audit-ready reports and artifacts on demand.' }
]

const capabilities = [
	{ icon: BarChart3, title: 'Dashboard', description: 'At-a-glance compliance posture, trends, and risk hot-spots.' },
	{ icon: Shield, title: 'Control Definition', description: 'Versioned control library with owners, mappings, and success criteria.' },
	{ icon: Database, title: 'Evidence Repository', description: 'Structured, tagged, and reviewable evidence with retention policies.' },
	{ icon: AlertTriangle, title: 'Violation Queue', description: 'Real-time triage with assignments, SLAs, and workflows.' },
	{ icon: Bell, title: 'Notifications', description: 'Signal-driven alerts for violations, expiring evidence, and exceptions.' },
	{ icon: Users, title: 'User & Role Management', description: 'Least-privilege access with audit logs.' }
]

const integrations = [
	{ category: 'Cloud', icon: Cloud, items: ['AWS', 'Azure', 'GCP'] },
	{ category: 'Identity', icon: Key, items: ['Okta', 'Azure AD', 'Google Workspace'] },
	{ category: 'Dev & CI/CD', icon: Code, items: ['GitHub', 'GitLab', 'Jenkins'] },
	{ category: 'Ticketing', icon: Ticket, items: ['Jira', 'ServiceNow', 'Linear'] },
	{ category: 'Security', icon: Lock, items: ['CrowdStrike', 'Wiz', 'Datadog'] }
]

function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div className="page home-page">
			{/* Hero Section */}
			<section className="hero">
				<div className="container">
					<div className="hero-content">
						<div className="hero-badge">
							<span className="badge">🚀 Modern Compliance Platform</span>
						</div>
						<h1 className="hero-title">
							Automate Compliance.<br />
							<span className="gradient-text">Prove Trust.</span>
						</h1>
						<p className="hero-subtitle">
							Define controls, collect evidence, catch violations, and pass audits faster
							with Aingran CCM — a modern, real-time compliance control management platform.
						</p>
						<div className="hero-actions">
							<Link to="/contact" className="btn btn-primary btn-lg">
								Get a Demo
								<ArrowRight size={20} />
							</Link>
							<Link to="/contact" className="btn btn-secondary btn-lg">
								Start Free
							</Link>
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

			{/* Social Proof */}
			<section className="section social-proof">
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

			{/* Value Pillars */}
			<section className="section">
				<div className="container">
					<div className="section-header">
						<h2>Everything you need for <span className="gradient-text">continuous compliance</span></h2>
						<p>Replace spreadsheets and ad-hoc folders with a live system of record for compliance.</p>
					</div>
					<div className="grid grid-4">
						{valuePillars.map((pillar) => (
							<FeatureCard
								key={pillar.title}
								icon={pillar.icon}
								title={pillar.title}
								description={pillar.description}
							/>
						))}
					</div>
				</div>
			</section>

			{/* How it Works */}
			<section className="section how-it-works">
				<div className="container">
					<div className="section-header">
						<h2>How it works</h2>
						<p>Get from zero to audit-ready in five simple steps.</p>
					</div>
					<div className="steps-container">
						{howItWorks.map((item, index) => (
							<div key={item.step} className="step-item">
								<div className="step-number">{item.step}</div>
								<div className="step-content">
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
								{index < howItWorks.length - 1 && (
									<div className="step-connector">
										<ArrowRight size={20} />
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Capabilities */}
			<section className="section">
				<div className="container">
					<div className="section-header">
						<h2>Powerful capabilities</h2>
						<p>Everything mapped to your compliance workflow.</p>
					</div>
					<div className="grid grid-3">
						{capabilities.map((cap) => (
							<FeatureCard
								key={cap.title}
								icon={cap.icon}
								title={cap.title}
								description={cap.description}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Integrations */}
			<section className="section integrations-section">
				<div className="container">
					<div className="section-header">
						<h2>Integrates with your stack</h2>
						<p>Connect your existing tools and start collecting evidence automatically.</p>
					</div>
					<div className="integrations-grid">
						{integrations.map((group) => (
							<div key={group.category} className="integration-group card">
								<div className="integration-header">
									<group.icon size={24} />
									<h4>{group.category}</h4>
								</div>
								<ul className="integration-list">
									{group.items.map((item) => (
										<li key={item}>
											<CheckCircle2 size={16} />
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="text-center mt-xl">
						<Link to="/integrations" className="btn btn-secondary">
							View All Integrations
							<ArrowRight size={18} />
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section cta-section">
				<div className="container">
					<div className="cta-box">
						<h2>Ready to automate your compliance?</h2>
						<p>Join teams who cut audit prep time by 50-70% with Aingran CCM.</p>
						<div className="cta-actions">
							<Link to="/contact" className="btn btn-primary btn-lg">
								Book a 30-minute Demo
								<ArrowRight size={20} />
							</Link>
							<Link to="/pricing" className="btn btn-secondary btn-lg">
								View Pricing
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
