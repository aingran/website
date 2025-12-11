import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import FAQ from '../components/FAQ'
import './Contact.css'

const contactInfo = [
	{ icon: Mail, label: 'Email', value: 'sales@aingran.com', href: 'mailto:sales@aingran.com' },
	{ icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
	{ icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null }
]

const faqItems = [
	{
		question: 'What is CCM?',
		answer: 'CCM (Compliance Control Management) is a platform to define controls, automate evidence collection, detect violations, and generate audit-ready reports. It centralizes your entire compliance workflow.'
	},
	{
		question: 'How is CCM different from GRC tools?',
		answer: 'CCM focuses on operationalizing technical controls with real-time automation and evidence—not just policy management. We integrate directly with your tech stack for automated evidence collection.'
	},
	{
		question: 'Can auditors use CCM?',
		answer: 'Yes! You can provide auditors with read-only access to view controls, evidence, and generate exports. The auditor workspace gives them everything they need without full platform access.'
	},
	{
		question: 'How fast can we onboard?',
		answer: 'Typical teams launch in 1–2 weeks with core integrations. Our onboarding team will help you set up controls, connect integrations, and train your team.'
	},
	{
		question: 'Do you support on-prem?',
		answer: 'Yes—hybrid options and on-prem collectors are available on the Enterprise plan. Contact our sales team to discuss your deployment requirements.'
	}
]

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: '',
		type: 'demo'
	})
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Simulate form submission
		console.log('Form submitted:', formData)
		setSubmitted(true)
	}

	return (
		<div className="page contact-page">
			{/* Hero */}
			<section className="contact-hero">
				<div className="container">
					<h1>Get in <span className="gradient-text">touch</span></h1>
					<p>Ready to automate your compliance? Let's talk about how Aingran CCM can help your team.</p>
				</div>
			</section>

			{/* Contact Section */}
			<section className="section">
				<div className="container">
					<div className="contact-grid">
						{/* Contact Form */}
						<div className="contact-form-wrapper card">
							{submitted ? (
								<div className="success-message">
									<CheckCircle size={48} />
									<h3>Thank you!</h3>
									<p>We've received your message and will get back to you within 24 hours.</p>
								</div>
							) : (
								<>
									<h2>Send us a message</h2>
									<form onSubmit={handleSubmit} className="contact-form">
										<div className="form-row">
											<div className="form-group">
												<label htmlFor="name">Name</label>
												<input
													type="text"
													id="name"
													name="name"
													value={formData.name}
													onChange={handleChange}
													required
													placeholder="Your name"
												/>
											</div>
											<div className="form-group">
												<label htmlFor="email">Email</label>
												<input
													type="email"
													id="email"
													name="email"
													value={formData.email}
													onChange={handleChange}
													required
													placeholder="you@company.com"
												/>
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="company">Company</label>
											<input
												type="text"
												id="company"
												name="company"
												value={formData.company}
												onChange={handleChange}
												placeholder="Your company name"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="type">I'm interested in</label>
											<select
												id="type"
												name="type"
												value={formData.type}
												onChange={handleChange}
											>
												<option value="demo">Scheduling a demo</option>
												<option value="trial">Starting a free trial</option>
												<option value="pricing">Pricing information</option>
												<option value="support">Technical support</option>
												<option value="other">Other</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="message">Message</label>
											<textarea
												id="message"
												name="message"
												value={formData.message}
												onChange={handleChange}
												rows="4"
												placeholder="Tell us about your compliance needs..."
											></textarea>
										</div>
										<button type="submit" className="btn btn-primary btn-lg">
											Send Message
											<Send size={18} />
										</button>
									</form>
								</>
							)}
						</div>

						{/* Contact Info */}
						<div className="contact-info">
							<h2>Contact information</h2>
							<p>Prefer to reach out directly? Here's how you can contact us.</p>
							<div className="contact-methods">
								{contactInfo.map((info) => (
									<div key={info.label} className="contact-method">
										<div className="icon-box">
											<info.icon size={20} />
										</div>
										<div>
											<span className="method-label">{info.label}</span>
											{info.href ? (
												<a href={info.href} className="method-value">{info.value}</a>
											) : (
												<span className="method-value">{info.value}</span>
											)}
										</div>
									</div>
								))}
							</div>

							{/* Office Hours */}
							<div className="office-hours">
								<h4>Office Hours</h4>
								<p>Monday – Friday: 9am – 6pm PST</p>
								<p>Enterprise support: 24/7</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="section contact-faq">
				<div className="container">
					<div className="section-header">
						<h2>Frequently asked questions</h2>
						<p>Quick answers to common questions about Aingran CCM.</p>
					</div>
					<FAQ items={faqItems} />
				</div>
			</section>
		</div>
	)
}

export default Contact
