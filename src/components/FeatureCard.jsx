import './FeatureCard.css'

function FeatureCard({ icon: Icon, title, description, className = '' }) {
	return (
		<div className={`feature-card card ${className}`}>
			<div className="icon-box">
				<Icon size={24} />
			</div>
			<h3 className="feature-card-title">{title}</h3>
			<p className="feature-card-description">{description}</p>
		</div>
	)
}

export default FeatureCard
