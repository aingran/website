import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import './PricingCard.css'

function PricingCard({ name, price, description, features, cta, popular = false }) {
	return (
		<div className={`pricing-card card ${popular ? 'popular' : ''}`}>
			{popular && <div className="popular-badge">Most Popular</div>}
			<div className="pricing-header">
				<h3 className="pricing-name">{name}</h3>
				<div className="pricing-price">
					{price === 'Custom' ? (
						<span className="price-custom">{price}</span>
					) : (
						<>
							<span className="price-currency">$</span>
							<span className="price-amount">{price}</span>
							<span className="price-period">/month</span>
						</>
					)}
				</div>
				<p className="pricing-description">{description}</p>
			</div>
			<ul className="pricing-features">
				{features.map((feature, index) => (
					<li key={index} className="pricing-feature">
						<Check size={18} className="feature-check" />
						<span>{feature}</span>
					</li>
				))}
			</ul>
			<Link
				to="/contact"
				className={`btn ${popular ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
			>
				{cta}
			</Link>
		</div>
	)
}

export default PricingCard
