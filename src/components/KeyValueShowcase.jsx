import { useState, useEffect, useRef } from 'react'
import {
	Plug,
	AlertTriangle,
	FileCheck,
	Users,
	Layers,
	TrendingDown,
	TrendingUp,
	DollarSign,
	Clock,
	Shield,
	Zap,
	Target,
	PieChart,
	BarChart3,
	ArrowUpRight,
	ArrowDownRight,
	Percent
} from 'lucide-react'
import './KeyValueShowcase.css'

const valuePillars = [
	{
		id: 'integration',
		icon: Plug,
		title: 'ERP-agnostic, non-intrusive integration',
		description: 'Designed to integrate with leading ERPs and source systems using read-only, event-driven data ingestion.',
		color: '#6366f1',
		metrics: [
			{ label: 'Integration Time', value: '60%', direction: 'down', suffix: 'faster' },
			{ label: 'System Downtime', value: '0', direction: 'neutral', suffix: 'hours' },
			{ label: 'Data Sources', value: '50+', direction: 'up', suffix: 'supported' }
		],
		impact: 'Minimal IT overhead with maximum coverage'
	},
	{
		id: 'monitoring',
		icon: AlertTriangle,
		title: 'Continuous, event-driven control monitoring',
		description: 'Moves organizations from periodic sampling to always-on control assurance with clear ownership and SLAs.',
		color: '#ec4899',
		metrics: [
			{ label: 'Detection Speed', value: '95%', direction: 'up', suffix: 'real-time' },
			{ label: 'Manual Checks', value: '80%', direction: 'down', suffix: 'reduced' },
			{ label: 'Coverage', value: '100%', direction: 'up', suffix: 'transactions' }
		],
		impact: 'From quarterly reviews to instant visibility'
	},
	{
		id: 'evidence',
		icon: FileCheck,
		title: 'Audit-ready evidence by design',
		description: 'Automated evidence capture, immutable audit trails, and traceability aligned to internal audit and regulatory expectations.',
		color: '#22c55e',
		metrics: [
			{ label: 'Audit Prep Time', value: '70%', direction: 'down', suffix: 'saved' },
			{ label: 'Evidence Quality', value: '99%', direction: 'up', suffix: 'complete' },
			{ label: 'Compliance Cost', value: '45%', direction: 'down', suffix: 'reduced' }
		],
		impact: 'Audit confidence with zero last-minute scramble'
	},
	{
		id: 'teams',
		icon: Users,
		title: 'Built for enterprise risk & compliance teams',
		description: 'Supports Finance Operations, Internal Audit, Risk, Compliance, and IT governance functions at scale.',
		color: '#f59e0b',
		metrics: [
			{ label: 'Team Productivity', value: '3x', direction: 'up', suffix: 'increase' },
			{ label: 'Resource Reallocation', value: '40%', direction: 'up', suffix: 'efficiency' },
			{ label: 'Cross-team Visibility', value: '100%', direction: 'up', suffix: 'shared' }
		],
		impact: 'Unified control visibility across functions'
	},
	{
		id: 'architecture',
		icon: Layers,
		title: 'Modern enterprise platform architecture',
		description: 'Event-driven, workflow-enabled, and scalable for multi-process and multi-system environments.',
		color: '#06b6d4',
		metrics: [
			{ label: 'Scalability', value: '∞', direction: 'up', suffix: 'unlimited' },
			{ label: 'Processing Time', value: '90%', direction: 'down', suffix: 'faster' },
			{ label: 'Future-ready', value: '100%', direction: 'up', suffix: 'modular' }
		],
		impact: 'Built to grow with your enterprise needs'
	}
]

const KeyValueShowcase = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isPlaying, setIsPlaying] = useState(true)
	const [isVisible, setIsVisible] = useState(false)
	const [animatedValues, setAnimatedValues] = useState({})
	const containerRef = useRef(null)
	const intervalRef = useRef(null)

	// Auto-progress through pillars
	useEffect(() => {
		if (isPlaying && isVisible) {
			intervalRef.current = setInterval(() => {
				setActiveIndex((prev) => (prev + 1) % valuePillars.length)
			}, 6000)
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [isPlaying, isVisible])

	// Animate values when index changes
	useEffect(() => {
		const pillar = valuePillars[activeIndex]
		setAnimatedValues({})

		// Animate each metric with a staggered delay
		pillar.metrics.forEach((metric, idx) => {
			setTimeout(() => {
				setAnimatedValues(prev => ({
					...prev,
					[idx]: true
				}))
			}, idx * 200)
		})
	}, [activeIndex])

	// Intersection observer
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true)
					} else {
						setIsVisible(false)
					}
				})
			},
			{ threshold: 0.2 }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const activePillar = valuePillars[activeIndex]
	const IconComponent = activePillar.icon

	const getDirectionIcon = (direction) => {
		switch (direction) {
			case 'up':
				return <ArrowUpRight size={16} className="metric-arrow up" />
			case 'down':
				return <ArrowDownRight size={16} className="metric-arrow down" />
			default:
				return <Target size={16} className="metric-arrow neutral" />
		}
	}

	return (
		<section className="key-value-showcase" ref={containerRef}>
			<div className="container">
				<div className="kv-header">
					<span className="kv-badge">
						<TrendingUp size={14} />
						Enterprise Value
					</span>
					<h2>Key Value Statements <span className="gradient-text">(Enterprise-focused)</span></h2>
					<p>Measurable outcomes that transform your compliance operations.</p>
				</div>

				{/* Value Visualization Dashboard */}
				<div className="kv-dashboard">
					{/* Metrics Display */}
					<div className="kv-metrics-panel" style={{ '--accent-color': activePillar.color }}>
						<div className="metrics-glow" />

						{/* Animated Chart Background */}
						<div className="metrics-chart-bg">
							<svg className="chart-lines" viewBox="0 0 300 150">
								{/* Grid lines */}
								{[0, 1, 2, 3, 4].map((i) => (
									<line
										key={`h-${i}`}
										x1="0"
										y1={30 * i}
										x2="300"
										y2={30 * i}
										className="grid-line"
									/>
								))}
								{/* Animated trend line */}
								<path
									d="M0,120 Q50,100 100,80 T200,40 T300,20"
									className="trend-line positive"
									style={{ animationDelay: '0.5s' }}
								/>
								<path
									d="M0,30 Q75,50 150,90 T300,130"
									className="trend-line negative"
									style={{ animationDelay: '0.8s' }}
								/>
							</svg>
						</div>

						<div className="metrics-header">
							<div className="metrics-icon" style={{ background: activePillar.color }}>
								<IconComponent size={28} />
							</div>
							<div className="metrics-title">
								<h3>{activePillar.title}</h3>
								<p>{activePillar.description}</p>
							</div>
						</div>

						<div className="metrics-grid">
							{activePillar.metrics.map((metric, idx) => (
								<div
									key={idx}
									className={`metric-card ${animatedValues[idx] ? 'animated' : ''}`}
									style={{ '--delay': `${idx * 0.15}s` }}
								>
									<div className="metric-value-wrapper">
										<span className={`metric-value ${metric.direction}`}>
											{metric.value}
										</span>
										{getDirectionIcon(metric.direction)}
									</div>
									<div className="metric-label">{metric.label}</div>
									<div className="metric-suffix">{metric.suffix}</div>

									{/* Animated progress bar */}
									<div className="metric-progress">
										<div
											className="metric-progress-fill"
											style={{
												'--fill-color': metric.direction === 'down' ? '#22c55e' : activePillar.color,
												width: animatedValues[idx] ? '100%' : '0%'
											}}
										/>
									</div>
								</div>
							))}
						</div>

						<div className="metrics-impact">
							<Shield size={18} />
							<span>{activePillar.impact}</span>
						</div>
					</div>

					{/* ROI Summary Visualization */}
					<div className="kv-roi-panel">
						<div className="roi-header">
							<DollarSign size={20} />
							<span>Value Generated</span>
						</div>

						<div className="roi-meters">
							{/* Cost Reduction Meter */}
							<div className="roi-meter">
								<div className="meter-icon cost">
									<TrendingDown size={18} />
								</div>
								<div className="meter-info">
									<span className="meter-label">Bottom Line Impact</span>
									<div className="meter-bar">
										<div
											className="meter-fill cost"
											style={{ width: isVisible ? '75%' : '0%' }}
										/>
									</div>
									<span className="meter-value">40-60% cost reduction</span>
								</div>
							</div>

							{/* Efficiency Meter */}
							<div className="roi-meter">
								<div className="meter-icon efficiency">
									<Clock size={18} />
								</div>
								<div className="meter-info">
									<span className="meter-label">Time Efficiency</span>
									<div className="meter-bar">
										<div
											className="meter-fill efficiency"
											style={{ width: isVisible ? '85%' : '0%' }}
										/>
									</div>
									<span className="meter-value">70% audit prep time saved</span>
								</div>
							</div>

							{/* Resource Meter */}
							<div className="roi-meter">
								<div className="meter-icon resource">
									<Users size={18} />
								</div>
								<div className="meter-info">
									<span className="meter-label">Resource Optimization</span>
									<div className="meter-bar">
										<div
											className="meter-fill resource"
											style={{ width: isVisible ? '90%' : '0%' }}
										/>
									</div>
									<span className="meter-value">3x team productivity</span>
								</div>
							</div>

							{/* Risk Meter */}
							<div className="roi-meter">
								<div className="meter-icon risk">
									<Shield size={18} />
								</div>
								<div className="meter-info">
									<span className="meter-label">Risk Reduction</span>
									<div className="meter-bar">
										<div
											className="meter-fill risk"
											style={{ width: isVisible ? '95%' : '0%' }}
										/>
									</div>
									<span className="meter-value">95% fewer audit findings</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Pillar Navigation */}
				<div className="kv-navigation">
					{valuePillars.map((pillar, index) => {
						const PillarIcon = pillar.icon
						const isActive = index === activeIndex

						return (
							<button
								key={pillar.id}
								className={`kv-nav-btn ${isActive ? 'active' : ''}`}
								onClick={() => setActiveIndex(index)}
								style={{ '--pillar-color': pillar.color }}
							>
								<span className="nav-icon">
									<PillarIcon size={20} />
								</span>
								<span className="nav-label">{pillar.title.split(',')[0]}</span>
								{isActive && <span className="nav-indicator" />}
							</button>
						)
					})}
				</div>

				{/* Progress Bar */}
				<div className="kv-progress">
					{valuePillars.map((pillar, index) => (
						<button
							key={pillar.id}
							className={`progress-segment ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'completed' : ''}`}
							onClick={() => setActiveIndex(index)}
							style={{ '--segment-color': pillar.color }}
						>
							<span className="segment-fill" />
						</button>
					))}
				</div>
			</div>
		</section>
	)
}

export default KeyValueShowcase
