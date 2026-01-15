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
	Lock,
	Layers,
	Briefcase,
	Factory,
	FileText,
	Server,
	AlertCircle
} from 'lucide-react'
import FeatureCard from '../components/FeatureCard'
import Testimonial from '../components/Testimonial'
import dashboardImg from '../assets/images/dashboard.png'
import ImageModal from '../components/ImageModal'
import ScrollReveal from '../components/ScrollReveal'
import ChallengesShowcase from '../components/ChallengesShowcase'
import OnePlatformShowcase from '../components/OnePlatformShowcase'
import HowItWorksFactory from '../components/HowItWorksFactory'
import './Home.css'

const trustBadges = ['SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS', 'SOX']

const valuePillars = [
	{
		icon: Plug,
		title: 'ERP-agnostic, non-intrusive integration',
		description: 'Designed to integrate with leading ERPs and source systems using read-only, event-driven data ingestion.'
	},
	{
		icon: AlertTriangle,
		title: 'Continuous, event-driven control monitoring',
		description: 'Moves organizations from periodic sampling to always-on control assurance with clear ownership and SLAs.'
	},
	{
		icon: FileCheck,
		title: 'Audit-ready evidence by design',
		description: 'Automated evidence capture, immutable audit trails, and traceability aligned to internal audit and regulatory expectations.'
	},
	{
		icon: Users,
		title: 'Built for enterprise risk, finance, and compliance teams',
		description: 'Supports Finance Operations, Internal Audit, Risk, Compliance, and IT governance functions at scale.'
	},
	{
		icon: Layers,
		title: 'Architecture aligned to modern enterprise platforms',
		description: 'Event-driven, workflow-enabled, and scalable for multi-process and multi-system environments.'
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

const teamsData = [
	{
		id: 'finance',
		icon: Briefcase,
		title: 'Finance & Accounting',
		objective: 'Financial accuracy, control effectiveness, and period-end confidence',
		features: [
			'Continuous monitoring of key financial and operational controls',
			'Early detection of control breaches impacting postings, accruals, and close',
			'Reduced reliance on manual reviews and post-facto corrections',
			'Automated, audit-ready evidence aligned to internal and regulatory controls'
		],
		value: 'Improved close confidence, fewer audit findings, reduced rework and financial leakage'
	},
	{
		id: 'operations',
		icon: Factory,
		title: 'Operations & Supply Chain',
		objective: 'Control adherence across operational transactions and fulfilment flows',
		features: [
			'Visibility into control breaches across Procure-to-Pay, inventory, and fulfilment processes',
			'Early identification of quantity, pricing, and tolerance exceptions before downstream impact',
			'Clear ownership and tracking of operational exceptions through resolution',
			'Continuous validation of process compliance without disrupting operations'
		],
		value: 'Lower operational risk, reduced exceptions, and improved process discipline at scale'
	},
	{
		id: 'audit',
		icon: FileText,
		title: 'Internal Audit',
		objective: 'Shift from periodic testing to continuous assurance',
		features: [
			'Continuous monitoring of key controls instead of sample-based testing',
			'Standardized, repeatable evidence automatically captured at the point of exception',
			'Full traceability from control logic to transaction, exception, action, and closure',
			'Improved audit planning using trend, severity, and recurrence insights'
		],
		value: 'Higher audit coverage, faster audits, stronger assurance with fewer manual interventions'
	},
	{
		id: 'it',
		icon: Server,
		title: 'IT & Enterprise Architecture',
		objective: 'Enable control monitoring without disrupting core systems',
		features: [
			'ERP-agnostic, read-only integration model that minimizes risk to transactional systems',
			'Event-driven architecture aligned with modern enterprise platforms',
			'Clear separation between source systems and control logic',
			'Scalable foundation that supports multiple ERPs, feeder systems, and future expansion'
		],
		value: 'Lower integration risk, cleaner architecture, and faster time-to-value for governance initiatives'
	}
]

const realWorldDetections = [
	'Restricted Material, Shipment sent to wrong country - NCs',
	'Accounting - No paper trial for write-offs',
	'IT - GDPR violation'
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
							Continuous Controls Monitoring — from periodic checks to continuous enterprise assurance
						</h1>
						<p className="hero-subtitle">
							Aingran’s CCM is an enterprise-grade Continuous Controls Monitoring platform that continuously evaluates critical business and financial controls across core enterprise processes such as Procure-to-Pay and Order-to-Cash, detects exceptions in near real time, and automatically captures audit-ready evidence across ERP and source systems.
						</p>
						<div className="hero-actions">
							<Link to="/contact" className="btn btn-primary btn-lg">
								Request a Demo
								<ArrowRight size={20} />
							</Link>
							<Link to="/features" className="btn btn-secondary btn-lg">
								Explore the Platform
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

			{/* Compliance Challenges */}
			<ChallengesShowcase />

			{/* Value Pillars */}
			<section className="section">
				<div className="container">
					<div className="section-header">
						<h2>Key Value Statements <span className="gradient-text">(Enterprise-focused)</span></h2>
						<p>Enterprise-grade Continuous Controls Monitoring platform.</p>
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



			{/* One Platform - Built for Teams */}
			<OnePlatformShowcase />

			{/* Real-world Detections */}
			<section className="section">
				<div className="container">
					<div className="section-header">
						<h2>Real-world Detections</h2>
						<p>Examples of what Aingran CCM catches in real-time.</p>
					</div>
					<div className="detections-grid">
						{realWorldDetections.map((item, index) => (
							<div key={index} className="detection-card">
								<AlertCircle className="text-danger" size={24} />
								<span>{item}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How it Works - Assembly Line */}
			<HowItWorksFactory />

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
		</div >
	)
}

export default Home
