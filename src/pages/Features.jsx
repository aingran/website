import { Link } from 'react-router-dom'
import {
	Shield,
	Database,
	AlertTriangle,
	BarChart3,
	Bell,
	Users,
	FileCheck,
	Settings,
	ArrowRight,
	CheckCircle2
} from 'lucide-react'
import './Features.css'

const features = [
	{
		id: 'control-definition',
		icon: Shield,
		title: 'Control Definition',
		description: 'Create, assign, and version controls with structured metadata.',
		details: [
			'Owner, reviewer, and frequency assignments',
			'Success criteria definitions',
			'Framework mappings (SOC 2, ISO 27001, etc.)',
			'Attached procedures and documentation',
			'Implementation status tracking',
			'Coverage visualization across services'
		],
	},
	{
		id: 'evidence-repository',
		icon: Database,
		title: 'Evidence Repository',
		description: 'Automated collection with full audit trail.',
		details: [
			'Automated collection from integrations',
			'Manual uploads with templates',
			'Tagging and deduplication',
			'Version control and retention policies',
			'Review & approval workflows',
			'Timestamps and audit logs'
		],
	},
	{
		id: 'violation-queue',
		icon: AlertTriangle,
		title: 'Violation Queue',
		description: 'Real-time detection with prioritized triage.',
		details: [
			'Real-time detection feeds',
			'Priority-based queuing',
			'Owner assignments with due dates/SLAs',
			'Comment threads for collaboration',
			'Link to Jira/ServiceNow tasks',
			'Auto-routing and exception suppression'
		],
	},
	{
		id: 'notifications',
		icon: Bell,
		title: 'Notifications',
		description: 'Stay informed with intelligent alerts.',
		details: [
			'Control owner subscriptions',
			'Auditor notifications',
			'Expiring evidence alerts',
			'Missed review reminders',
			'New violation notifications',
			'Email and Slack/Teams delivery'
		],
	},
	{
		id: 'dashboard-reporting',
		icon: BarChart3,
		title: 'Dashboard & Reporting',
		description: 'Real-time visibility into compliance posture.',
		details: [
			'Posture score by framework and domain',
			'Evidence freshness trends',
			'Violation MTTR metrics',
			'Control coverage analytics',
			'One-click auditor exports',
			'Executive summaries'
		],
	},
	{
		id: 'user-management',
		icon: Users,
		title: 'User & Role Management',
		description: 'Enterprise-grade access controls.',
		details: [
			'SSO/SAML/OIDC support',
			'SCIM provisioning',
			'Granular role definitions',
			'Admin, Control Owner, Reviewer roles',
			'Auditor read-only access',
			'Immutable audit logs and IP allow-listing'
		],
	},
]

function Features() {
	return (
		<div className="page features-page">
			{/* Hero */}
			<section className="features-hero">
				<div className="container">
					<h1>Powerful features for <span className="gradient-text">modern compliance</span></h1>
					<p>Everything you need to define controls, automate evidence, and prove compliance.</p>
				</div>
			</section>

			{/* Features Grid */}
			<section className="section">
				<div className="container">
					<div className="features-list">
						{features.map((feature, index) => (
							<div
								key={feature.id}
								id={feature.id}
								className={`feature-block ${index % 2 === 1 ? 'reverse' : ''}`}
							>
								<div className="feature-content">
									<div className="icon-box icon-box-lg">
										<feature.icon size={28} />
									</div>
									<h2>{feature.title}</h2>
									<p className="feature-description">{feature.description}</p>
									<ul className="feature-details">
										{feature.details.map((detail) => (
											<li key={detail}>
												<CheckCircle2 size={18} />
												<span>{detail}</span>
											</li>
										))}
									</ul>
								</div>
								<div className="feature-visual">
									<div className="feature-card-preview">
										<feature.icon size={48} className="preview-icon" />
										<span>{feature.title}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="section">
				<div className="container">
					<div className="features-cta card">
						<h2>Ready to see it in action?</h2>
						<p>Schedule a personalized demo and see how Aingran CCM can transform your compliance workflow.</p>
						<Link to="/contact" className="btn btn-primary btn-lg">
							Get a Demo
							<ArrowRight size={20} />
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Features
