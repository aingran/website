import './LegalPages.css'

function TermsOfService() {
	const currentYear = new Date().getFullYear()

	return (
		<div className="legal-page">
			<div className="container">
				<div className="legal-content">
					<h1>Terms of Service</h1>
					<p className="legal-last-updated">Last updated: January 15, {currentYear}</p>

					<section className="legal-section">
						<h2>1. Acceptance of Terms</h2>
						<p>
							By accessing and using the Aingran Continuous Controls Monitoring (CCM) platform
							("Service"), you agree to be bound by these Terms of Service ("Terms"). If you
							do not agree to these Terms, you may not use our Service.
						</p>
					</section>

					<section className="legal-section">
						<h2>2. Description of Service</h2>
						<p>
							Aingran CCM is an enterprise-grade compliance monitoring platform that provides
							continuous evaluation of business and financial controls, exception detection,
							and audit-ready evidence collection across ERP and source systems.
						</p>
					</section>

					<section className="legal-section">
						<h2>3. User Account</h2>
						<p>
							To access certain features of the Service, you may be required to create an account.
							You are responsible for:
						</p>
						<ul>
							<li>Maintaining the confidentiality of your account credentials</li>
							<li>All activities that occur under your account</li>
							<li>Notifying us immediately of any unauthorized access</li>
							<li>Ensuring your account information is accurate and current</li>
						</ul>
					</section>

					<section className="legal-section">
						<h2>4. Acceptable Use</h2>
						<p>You agree not to:</p>
						<ul>
							<li>Use the Service for any unlawful purpose</li>
							<li>Attempt to gain unauthorized access to any systems or networks</li>
							<li>Transmit any viruses, malware, or malicious code</li>
							<li>Interfere with or disrupt the Service's functionality</li>
							<li>Reproduce, duplicate, or sell any portion of the Service</li>
							<li>Use automated means to access the Service without authorization</li>
						</ul>
					</section>

					<section className="legal-section">
						<h2>5. Intellectual Property</h2>
						<p>
							All content, features, and functionality of the Service, including but not limited
							to text, graphics, logos, and software, are the exclusive property of Aingran and
							are protected by international copyright, trademark, and other intellectual
							property laws.
						</p>
					</section>

					<section className="legal-section">
						<h2>6. Data Protection</h2>
						<p>
							We are committed to protecting your data. Our handling of your information is
							governed by our Privacy Policy. By using the Service, you consent to such processing
							and you warrant that all data provided by you is accurate.
						</p>
					</section>

					<section className="legal-section">
						<h2>7. Service Level Agreement</h2>
						<p>
							Enterprise customers may be entitled to specific service level agreements (SLAs)
							as detailed in their separate subscription agreements. Standard availability
							targets and support response times are defined in the applicable service documentation.
						</p>
					</section>

					<section className="legal-section">
						<h2>8. Limitation of Liability</h2>
						<p>
							To the maximum extent permitted by law, Aingran shall not be liable for any
							indirect, incidental, special, consequential, or punitive damages, or any loss
							of profits or revenues, whether incurred directly or indirectly, or any loss of
							data, use, goodwill, or other intangible losses.
						</p>
					</section>

					<section className="legal-section">
						<h2>9. Indemnification</h2>
						<p>
							You agree to indemnify, defend, and hold harmless Aingran and its officers,
							directors, employees, and agents from any claims, liabilities, damages, losses,
							and expenses arising from your use of the Service or violation of these Terms.
						</p>
					</section>

					<section className="legal-section">
						<h2>10. Modifications to Terms</h2>
						<p>
							We reserve the right to modify these Terms at any time. We will notify users of
							any material changes by posting the new Terms on this page and updating the
							"Last updated" date. Your continued use of the Service after changes constitutes
							acceptance of the modified Terms.
						</p>
					</section>

					<section className="legal-section">
						<h2>11. Termination</h2>
						<p>
							We may terminate or suspend your account and access to the Service immediately,
							without prior notice, for conduct that we believe violates these Terms or is
							harmful to other users, us, or third parties, or for any other reason.
						</p>
					</section>

					<section className="legal-section">
						<h2>12. Governing Law</h2>
						<p>
							These Terms shall be governed by and construed in accordance with applicable laws,
							without regard to conflict of law principles. Any disputes arising from these Terms
							shall be resolved through binding arbitration.
						</p>
					</section>

					<section className="legal-section">
						<h2>13. Contact Information</h2>
						<p>
							For any questions about these Terms of Service, please contact us at:
						</p>
						<p className="legal-contact">
							<strong>Email:</strong> legal@aingran.com<br />
							<strong>Address:</strong> Aingran, Inc.
						</p>
					</section>
				</div>
			</div>
		</div>
	)
}

export default TermsOfService
