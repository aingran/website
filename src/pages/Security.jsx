import { Link } from 'react-router-dom'
import {
	Shield,
	Lock,
	Key,
	Eye,
	Server,
	FileCheck,
	ArrowRight,
	CheckCircle2
} from 'lucide-react'
import './Security.css'

const securityFeatures = [
	{
		icon: Lock,
		title: 'Data Protection',
		items: [
			'Encryption in transit (TLS 1.3)',
			'Encryption at rest (AES-256)',
			'Optional customer-managed keys (CMK)',
			'Data residency options'
		]
	},
	{
		icon: Key,
		title: 'Access Controls',
		items: [
			'Role-based access control (RBAC)',
			'SSO/SAML 2.0/OIDC integration',
			'SCIM user provisioning',
			'Least-privilege defaults',
			'IP allow-listing'
		]
	},
	{
		icon: Eye,
		title: 'Auditability',
		items: [
			'Immutable audit logs',
			'Evidence versioning',
			'Activity trails',
			'User session tracking',
			'API request logging'
		]
	},
	{
		icon: Server,
		title: 'Availability',
		items: [
			'Multi-AZ architecture',
			'Continuous backups',
			'99.9% SLA uptime',
			'Disaster recovery',
			'Status page'
		]
	}
]

const certifications = [
	{ name: 'SOC 2 Type II', description: 'Annual audit by independent third party' },
	{ name: 'ISO 27001', description: 'Certified information security management' },
	{ name: 'HIPAA', description: 'BAA available for covered entities' },
	{ name: 'GDPR', description: 'Compliant data processing' },
	{ name: 'PCI DSS', description: 'Level 1 service provider' }
]

function Security() {
	return (
		<div className="page security-page">
			{/* Hero */}
			<section className="security-hero">
				<div className="container">
					<div className="icon-box icon-box-lg hero-icon">
						<Shield size={32} />
					</div>
					<h1>Security & <span className="gradient-text">Trust</span></h1>
					<p>Your compliance data is critical. We've built Aingran CCM with security-first principles to protect your most sensitive information.</p>
				</div>
			</section>

			{/* Security Features */}
			<section className="section">
				<div className="container">
					<div className="security-grid">
						{securityFeatures.map((feature) => (
							<div key={feature.title} className="security-card card">
								<div className="icon-box">
									<feature.icon size={24} />
								</div>
								<h3>{feature.title}</h3>
								<ul className="security-list">
									{feature.items.map((item) => (
										<li key={item}>
											<CheckCircle2 size={16} />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Certifications */}
			<section className="section certifications-section">
				<div className="container">
					<div className="section-header">
						<h2>Compliance & Certifications</h2>
						<p>Aingran CCM is designed to support your compliance requirements.</p>
					</div>
					<div className="certifications-grid">
						{certifications.map((cert) => (
							<div key={cert.name} className="certification-card card">
								<FileCheck size={24} className="cert-icon" />
								<h4>{cert.name}</h4>
								<p>{cert.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Trust Commitment */}
			<section className="section">
				<div className="container">
					<div className="trust-commitment card">
						<h2>Our Security Commitment</h2>
						<div className="commitment-content">
							<div className="commitment-item">
								<h4>Vulnerability Management</h4>
								<p>Regular penetration testing, bug bounty program, and continuous vulnerability scanning.</p>
							</div>
							<div className="commitment-item">
								<h4>Incident Response</h4>
								<p>24/7 security monitoring with defined incident response procedures and communication protocols.</p>
							</div>
							<div className="commitment-item">
								<h4>Employee Security</h4>
								<p>Background checks, security training, and least-privilege access for all personnel.</p>
							</div>
							<div className="commitment-item">
								<h4>Vendor Management</h4>
								<p>Rigorous vendor security assessments and continuous monitoring of third-party risks.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="section">
				<div className="container">
					<div className="security-cta card">
						<h2>Have security questions?</h2>
						<p>Our security team is happy to answer your questions and provide additional documentation.</p>
						<Link to="/contact" className="btn btn-primary btn-lg">
							Contact Security Team
							<ArrowRight size={20} />
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Security
