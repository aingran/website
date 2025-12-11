import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
	Shield,
	Users,
	Code,
	Building2,
	CheckCircle2,
	ArrowRight
} from 'lucide-react'
import './Solutions.css'

const frameworks = [
	{
		id: 'soc2',
		name: 'SOC 2',
		description: 'Type I & II certification support',
		details: [
			'Map controls to Common Criteria (CCs)',
			'Automate evidence collection across trust principles',
			'Monitor exceptions and remediation',
			'Generate auditor-ready reports'
		]
	},
	{
		id: 'iso27001',
		name: 'ISO 27001',
		description: 'Information security management',
		details: [
			'Align Annex A controls',
			'Track risk treatments and assessments',
			'Version Statement of Applicability artifacts',
			'Continuous improvement monitoring'
		]
	},
	{
		id: 'hipaa',
		name: 'HIPAA',
		description: 'Healthcare data protection',
		details: [
			'Safeguards tracking (Administrative, Physical, Technical)',
			'Workforce access reviews',
			'Audit trails for PHI access',
			'Breach notification workflows'
		]
	},
	{
		id: 'pcidss',
		name: 'PCI DSS',
		description: 'Payment card security',
		details: [
			'Technical controls coverage',
			'Network segmentation evidence',
			'Quarterly review automation',
			'SAQ and ROC preparation'
		]
	},
	{
		id: 'sox',
		name: 'SOX',
		description: 'Financial reporting controls',
		details: [
			'ITGC control monitoring',
			'Change management evidence',
			'Role certifications and access reviews',
			'Deficiency tracking and remediation'
		]
	}
]

const teams = [
	{
		id: 'security',
		icon: Shield,
		name: 'Security & GRC',
		description: 'Centralized control ownership, continuous monitoring, audit-ready exports.',
		benefits: [
			'Single pane of glass for all compliance',
			'Real-time posture visibility',
			'Automated evidence collection',
			'Streamlined audit preparation'
		]
	},
	{
		id: 'it-ops',
		icon: Building2,
		name: 'IT Operations',
		description: 'Clear SLAs, violation queue, and workload routing.',
		benefits: [
			'Priority-based violation triage',
			'SLA tracking and alerts',
			'Integration with ticketing systems',
			'Workload distribution'
		]
	},
	{
		id: 'engineering',
		icon: Code,
		name: 'Engineering',
		description: 'Low-friction evidence from CI/CD and code repos.',
		benefits: [
			'Automated evidence from GitHub/GitLab',
			'CI/CD pipeline integration',
			'Security scanner result imports',
			'Developer-friendly workflows'
		]
	},
	{
		id: 'leadership',
		icon: Users,
		name: 'Leadership',
		description: 'Real-time posture dashboards and board-level summaries.',
		benefits: [
			'Executive compliance dashboards',
			'Risk trend visualizations',
			'Board-ready reports',
			'Audit timeline visibility'
		]
	}
]

function Solutions() {
	const [activeTab, setActiveTab] = useState('frameworks')

	return (
		<div className="page solutions-page">
			{/* Hero */}
			<section className="solutions-hero">
				<div className="container">
					<h1>Solutions for every <span className="gradient-text">compliance need</span></h1>
					<p>Whether you're pursuing SOC 2, ISO 27001, or serving specific teams, Aingran CCM has you covered.</p>
				</div>
			</section>

			{/* Tabs */}
			<section className="section">
				<div className="container">
					<div className="solutions-tabs">
						<button
							className={`tab-btn ${activeTab === 'frameworks' ? 'active' : ''}`}
							onClick={() => setActiveTab('frameworks')}
						>
							By Framework
						</button>
						<button
							className={`tab-btn ${activeTab === 'teams' ? 'active' : ''}`}
							onClick={() => setActiveTab('teams')}
						>
							By Team
						</button>
					</div>

					{/* Frameworks Tab */}
					{activeTab === 'frameworks' && (
						<div className="tab-content">
							<div className="frameworks-grid">
								{frameworks.map((framework) => (
									<div key={framework.id} className="framework-card card">
										<div className="framework-header">
											<h3>{framework.name}</h3>
											<span className="framework-desc">{framework.description}</span>
										</div>
										<ul className="framework-details">
											{framework.details.map((detail) => (
												<li key={detail}>
													<CheckCircle2 size={16} />
													<span>{detail}</span>
												</li>
											))}
										</ul>
										<Link to="/contact" className="btn btn-secondary">
											Learn More
										</Link>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Teams Tab */}
					{activeTab === 'teams' && (
						<div className="tab-content">
							<div className="teams-grid">
								{teams.map((team) => (
									<div key={team.id} className="team-card card">
										<div className="icon-box">
											<team.icon size={24} />
										</div>
										<h3>{team.name}</h3>
										<p className="team-description">{team.description}</p>
										<ul className="team-benefits">
											{team.benefits.map((benefit) => (
												<li key={benefit}>
													<CheckCircle2 size={16} />
													<span>{benefit}</span>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</section>

			{/* CTA */}
			<section className="section">
				<div className="container">
					<div className="solutions-cta card">
						<h2>Find the right solution for your organization</h2>
						<p>Talk to our team about your specific compliance requirements.</p>
						<Link to="/contact" className="btn btn-primary btn-lg">
							Schedule a Consultation
							<ArrowRight size={20} />
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Solutions
