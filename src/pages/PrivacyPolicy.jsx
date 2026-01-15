import './LegalPages.css'

function PrivacyPolicy() {
	const currentYear = new Date().getFullYear()

	return (
		<div className="legal-page">
			<div className="container">
				<div className="legal-content">
					<h1>Privacy Policy</h1>
					<p className="legal-last-updated">Last updated: January 15, {currentYear}</p>

					<section className="legal-section">
						<h2>1. Introduction</h2>
						<p>
							Aingran ("we," "our," or "us") is committed to protecting your privacy. This
							Privacy Policy explains how we collect, use, disclose, and safeguard your
							information when you use our Continuous Controls Monitoring (CCM) platform
							and related services.
						</p>
					</section>

					<section className="legal-section">
						<h2>2. Information We Collect</h2>
						<h3>2.1 Information You Provide</h3>
						<ul>
							<li><strong>Account Information:</strong> Name, email address, company name, job title, and phone number</li>
							<li><strong>Business Data:</strong> Compliance-related data you upload or connect to our platform</li>
							<li><strong>Communication Data:</strong> Messages, feedback, and support requests</li>
							<li><strong>Payment Information:</strong> Billing details processed securely through third-party providers</li>
						</ul>

						<h3>2.2 Automatically Collected Information</h3>
						<ul>
							<li><strong>Usage Data:</strong> Pages visited, features used, and interaction patterns</li>
							<li><strong>Device Information:</strong> Browser type, operating system, and IP address</li>
							<li><strong>Cookies:</strong> Session and persistent cookies for functionality and analytics</li>
						</ul>
					</section>

					<section className="legal-section">
						<h2>3. How We Use Your Information</h2>
						<p>We use the collected information to:</p>
						<ul>
							<li>Provide, maintain, and improve our CCM platform</li>
							<li>Process transactions and manage your account</li>
							<li>Send you updates, security alerts, and support messages</li>
							<li>Respond to your comments, questions, and requests</li>
							<li>Monitor and analyze usage patterns and trends</li>
							<li>Detect, prevent, and address technical issues and security threats</li>
							<li>Comply with legal obligations and protect our rights</li>
						</ul>
					</section>

					<section className="legal-section">
						<h2>4. Data Sharing and Disclosure</h2>
						<p>We may share your information with:</p>
						<ul>
							<li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
							<li><strong>Business Partners:</strong> With your consent, for integrated services</li>
							<li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
							<li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
						</ul>
						<p>We do not sell your personal information to third parties.</p>
					</section>

					<section className="legal-section">
						<h2>5. Data Security</h2>
						<p>
							We implement industry-standard security measures to protect your data, including:
						</p>
						<ul>
							<li>End-to-end encryption for data in transit and at rest</li>
							<li>SOC 2 Type II certified infrastructure</li>
							<li>Regular security audits and penetration testing</li>
							<li>Access controls and authentication mechanisms</li>
							<li>Continuous monitoring and threat detection</li>
						</ul>
					</section>

					<section className="legal-section">
						<h2>6. Data Retention</h2>
						<p>
							We retain your information for as long as your account is active or as needed to
							provide services. After account termination, we may retain certain information for
							legitimate business purposes, legal compliance, or dispute resolution.
						</p>
					</section>

					<section className="legal-section">
						<h2>7. Your Rights and Choices</h2>
						<p>Depending on your location, you may have the right to:</p>
						<ul>
							<li><strong>Access:</strong> Request a copy of your personal data</li>
							<li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
							<li><strong>Erasure:</strong> Request deletion of your personal data</li>
							<li><strong>Portability:</strong> Receive your data in a portable format</li>
							<li><strong>Restriction:</strong> Limit processing of your data</li>
							<li><strong>Objection:</strong> Object to certain processing activities</li>
							<li><strong>Withdraw Consent:</strong> Revoke previously given consent</li>
						</ul>
						<p>To exercise these rights, contact us at privacy@aingran.com.</p>
					</section>

					<section className="legal-section">
						<h2>8. International Data Transfers</h2>
						<p>
							Your information may be transferred to and processed in countries other than your
							own. We ensure appropriate safeguards are in place, including Standard Contractual
							Clauses and compliance with applicable data protection frameworks.
						</p>
					</section>

					<section className="legal-section">
						<h2>9. Cookies and Tracking Technologies</h2>
						<p>We use cookies and similar technologies for:</p>
						<ul>
							<li><strong>Essential Cookies:</strong> Required for platform functionality</li>
							<li><strong>Analytics Cookies:</strong> To understand usage patterns</li>
							<li><strong>Preference Cookies:</strong> To remember your settings</li>
						</ul>
						<p>
							You can manage cookie preferences through your browser settings. Note that
							disabling certain cookies may affect platform functionality.
						</p>
					</section>

					<section className="legal-section">
						<h2>10. Children's Privacy</h2>
						<p>
							Our Service is not intended for individuals under 18 years of age. We do not
							knowingly collect personal information from children. If you believe we have
							collected such information, please contact us immediately.
						</p>
					</section>

					<section className="legal-section">
						<h2>11. Third-Party Links</h2>
						<p>
							Our platform may contain links to third-party websites. We are not responsible
							for their privacy practices. We encourage you to review the privacy policies of
							any third-party sites you visit.
						</p>
					</section>

					<section className="legal-section">
						<h2>12. Changes to This Policy</h2>
						<p>
							We may update this Privacy Policy periodically. We will notify you of any
							material changes by posting the new policy on this page and updating the
							"Last updated" date. We encourage you to review this policy regularly.
						</p>
					</section>

					<section className="legal-section">
						<h2>13. Contact Us</h2>
						<p>
							If you have questions about this Privacy Policy or our data practices,
							please contact us at:
						</p>
						<p className="legal-contact">
							<strong>Email:</strong> privacy@aingran.com<br />
							<strong>Data Protection Officer:</strong> dpo@aingran.com<br />
							<strong>Address:</strong> Aingran, Inc.
						</p>
					</section>
				</div>
			</div>
		</div>
	)
}

export default PrivacyPolicy
