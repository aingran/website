import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PricingCard from '../components/PricingCard'
import FAQ from '../components/FAQ'
import './Pricing.css'

const pricingPlans = [
	{
		name: 'Free',
		price: '0',
		description: 'For small teams getting started with compliance.',
		features: [
			'Up to 3 users',
			'1 framework',
			'Manual evidence uploads',
			'Core dashboard',
			'Email support'
		],
		cta: 'Get Started Free',
		popular: false
	},
	{
		name: 'Team',
		price: '499',
		description: 'For growing teams with automation needs.',
		features: [
			'Up to 15 users',
			'3 frameworks',
			'Integrations & automations',
			'Violation queue',
			'Automation rules',
			'Basic reporting',
			'Priority support'
		],
		cta: 'Start Free Trial',
		popular: false
	},
	{
		name: 'Business',
		price: '999',
		description: 'For organizations with enterprise requirements.',
		features: [
			'Up to 50 users',
			'Unlimited frameworks',
			'SSO/SAML authentication',
			'Custom roles & permissions',
			'Auditor workspace',
			'Advanced exports',
			'API access',
			'Dedicated support'
		],
		cta: 'Start Free Trial',
		popular: true
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		description: 'For large organizations with custom needs.',
		features: [
			'Unlimited users',
			'All frameworks',
			'On-prem agents',
			'Advanced RBAC & DLP',
			'Custom integrations',
			'Dedicated success manager',
			'Custom SLAs',
			'SOC 2 Type II attestation'
		],
		cta: 'Contact Sales',
		popular: false
	}
]

const faqItems = [
	{
		question: 'Can I switch plans later?',
		answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at the next billing cycle.'
	},
	{
		question: 'What payment methods do you accept?',
		answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and can provide invoicing for annual Business and Enterprise plans.'
	},
	{
		question: 'Is there a free trial?',
		answer: 'Yes! All paid plans come with a 14-day free trial. No credit card required to start. You\'ll have full access to all features during the trial period.'
	},
	{
		question: 'What happens when I exceed my user limit?',
		answer: 'We\'ll notify you when you\'re approaching your limit and provide options to upgrade. We won\'t automatically charge you for additional users without your approval.'
	},
	{
		question: 'Do you offer discounts for startups or non-profits?',
		answer: 'Yes, we offer special pricing for qualifying startups and non-profit organizations. Contact our sales team to learn more about eligibility and discounts.'
	}
]

function Pricing() {
	return (
		<div className="page pricing-page">
			{/* Hero */}
			<section className="pricing-hero">
				<div className="container">
					<h1>Simple, transparent <span className="gradient-text">pricing</span></h1>
					<p>Choose the plan that fits your team's compliance needs. All plans include core features.</p>
				</div>
			</section>

			{/* Pricing Cards */}
			<section className="section pricing-section">
				<div className="container">
					<div className="pricing-grid">
						{pricingPlans.map((plan) => (
							<PricingCard key={plan.name} {...plan} />
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="section pricing-faq">
				<div className="container">
					<div className="section-header">
						<h2>Frequently asked questions</h2>
						<p>Have another question? Contact our team.</p>
					</div>
					<FAQ items={faqItems} />
				</div>
			</section>

			{/* CTA */}
			<section className="section">
				<div className="container">
					<div className="pricing-cta card">
						<h2>Need a custom plan?</h2>
						<p>Talk to our sales team about enterprise pricing and custom requirements.</p>
						<Link to="/contact" className="btn btn-primary btn-lg">
							Contact Sales
							<ArrowRight size={20} />
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Pricing
