import { useState, useEffect, useRef } from 'react'
import {
	Briefcase,
	Factory,
	FileText,
	Server,
	Play,
	Pause,
	ChevronLeft,
	ChevronRight,
	CheckCircle2,
	Zap,
	Shield,
	TrendingUp
} from 'lucide-react'
import './OnePlatformShowcase.css'

const enterpriseDimensions = [
	{
		id: 'finance',
		icon: Briefcase,
		title: 'Finance & Accounting',
		subtitle: 'Financial accuracy & control effectiveness',
		features: [
			'Continuous monitoring of key financial controls',
			'Early detection of control breaches',
			'Automated, audit-ready evidence'
		],
		value: 'Improved close confidence, fewer audit findings',
		color: '#6366f1'
	},
	{
		id: 'operations',
		icon: Factory,
		title: 'Operations & Supply Chain',
		subtitle: 'Control adherence across transactions',
		features: [
			'Visibility into control breaches across P2P',
			'Early identification of exceptions',
			'Clear ownership and tracking'
		],
		value: 'Lower operational risk, reduced exceptions',
		color: '#8b5cf6'
	},
	{
		id: 'audit',
		icon: FileText,
		title: 'Internal Audit',
		subtitle: 'From periodic testing to continuous assurance',
		features: [
			'Continuous monitoring vs sample-based testing',
			'Standardized evidence capture',
			'Full traceability from control to closure'
		],
		value: 'Higher audit coverage, faster audits',
		color: '#ec4899'
	},
	{
		id: 'it',
		icon: Server,
		title: 'IT & Enterprise Architecture',
		subtitle: 'Control monitoring without disruption',
		features: [
			'ERP-agnostic, read-only integration',
			'Event-driven architecture alignment',
			'Clear separation of concerns'
		],
		value: 'Lower integration risk, faster time-to-value',
		color: '#06b6d4'
	}
]

const OnePlatformShowcase = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isPlaying, setIsPlaying] = useState(true)
	const [isVisible, setIsVisible] = useState(false)
	const containerRef = useRef(null)
	const intervalRef = useRef(null)

	// Auto-progress through dimensions
	useEffect(() => {
		if (isPlaying && isVisible) {
			intervalRef.current = setInterval(() => {
				setActiveIndex((prev) => (prev + 1) % enterpriseDimensions.length)
			}, 5000)
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [isPlaying, isVisible])

	// Intersection observer to start animation when visible
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
			{ threshold: 0.3 }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const goToNext = () => {
		setActiveIndex((prev) => (prev + 1) % enterpriseDimensions.length)
	}

	const goToPrev = () => {
		setActiveIndex((prev) => (prev - 1 + enterpriseDimensions.length) % enterpriseDimensions.length)
	}

	const togglePlay = () => {
		setIsPlaying(!isPlaying)
	}

	const activeDimension = enterpriseDimensions[activeIndex]
	const IconComponent = activeDimension.icon

	return (
		<section className="one-platform-showcase" ref={containerRef}>
			<div className="container">
				<div className="platform-header">
					<span className="platform-badge">Enterprise Platform</span>
					<h2>One platform. <span className="gradient-text">Shared control visibility.</span></h2>
					<p>Clear ownership across the enterprise. Built for Teams Who Live with Risk, Controls, and Audits.</p>
				</div>

				{/* Network Graph Visualization */}
				<div className="platform-network">
					<div className="network-container">
						{/* Connection Lines SVG */}
						<svg className="network-lines" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid meet">
							{/* Define node positions */}
							{(() => {
								const positions = [
									{ x: 125, y: 80 },   // Finance - top left
									{ x: 375, y: 80 },   // Operations - top right
									{ x: 100, y: 220 },  // Audit - bottom left
									{ x: 400, y: 220 },  // IT - bottom right
								]
								const centerX = 250
								const centerY = 150

								// Create all connection lines
								const lines = []

								// Connect each node to center (CCM platform)
								positions.forEach((pos, i) => {
									const isActive = i === activeIndex
									lines.push(
										<line
											key={`center-${i}`}
											x1={centerX}
											y1={centerY}
											x2={pos.x}
											y2={pos.y}
											className={`network-line to-center ${isActive ? 'active' : ''}`}
											style={{ '--line-color': enterpriseDimensions[i].color }}
										/>
									)
								})

								// Connect nodes to each other (web pattern)
								for (let i = 0; i < positions.length; i++) {
									for (let j = i + 1; j < positions.length; j++) {
										const eitherActive = i === activeIndex || j === activeIndex
										lines.push(
											<line
												key={`node-${i}-${j}`}
												x1={positions[i].x}
												y1={positions[i].y}
												x2={positions[j].x}
												y2={positions[j].y}
												className={`network-line node-to-node ${eitherActive ? 'highlight' : ''}`}
											/>
										)
									}
								}

								return lines
							})()}

							{/* Data flow particles on active connection */}
							{(() => {
								const positions = [
									{ x: 125, y: 80 },
									{ x: 375, y: 80 },
									{ x: 100, y: 220 },
									{ x: 400, y: 220 },
								]
								const centerX = 250
								const centerY = 150
								const activePos = positions[activeIndex]

								return (
									<g className="data-flow">
										<circle r="4" fill={enterpriseDimensions[activeIndex].color}>
											<animateMotion
												dur="2s"
												repeatCount="indefinite"
												path={`M${activePos.x},${activePos.y} L${centerX},${centerY}`}
											/>
										</circle>
										<circle r="3" fill={enterpriseDimensions[activeIndex].color} opacity="0.6">
											<animateMotion
												dur="2s"
												repeatCount="indefinite"
												begin="0.5s"
												path={`M${activePos.x},${activePos.y} L${centerX},${centerY}`}
											/>
										</circle>
									</g>
								)
							})()}
						</svg>

						{/* Central Platform Node */}
						<div className="network-center">
							<div className="center-glow" />
							<div className="center-node">
								<Shield size={20} />
								<span>CCM</span>
							</div>
						</div>

						{/* Department Nodes */}
						{enterpriseDimensions.map((dimension, index) => {
							const isActive = index === activeIndex
							const DimIcon = dimension.icon

							// Network positions (percentages)
							const positions = [
								{ left: '25%', top: '15%' },   // Finance
								{ left: '75%', top: '15%' },   // Operations
								{ left: '20%', top: '70%' },   // Audit
								{ left: '80%', top: '70%' },   // IT
							]

							return (
								<button
									key={dimension.id}
									className={`network-node ${isActive ? 'active' : ''}`}
									onClick={() => setActiveIndex(index)}
									style={{
										'--node-color': dimension.color,
										left: positions[index].left,
										top: positions[index].top
									}}
									aria-label={`Select ${dimension.title}`}
								>
									<span className="node-inner">
										<DimIcon size={isActive ? 28 : 22} />
									</span>
									{isActive && <span className="node-ring" />}
									{isActive && <span className="node-pulse" />}
									<span className="node-label">{dimension.title.split('&')[0].trim()}</span>
								</button>
							)
						})}
					</div>
				</div>

				{/* Content Display */}
				<div className="platform-content">
					<div className="platform-card" style={{ '--accent-color': activeDimension.color }}>
						<div className="card-glow" />

						<div className="card-header">
							<div className="card-icon-wrapper">
								<div className="card-icon-bg">
									<IconComponent size={36} />
								</div>
							</div>
							<div className="card-title-section">
								<h3>{activeDimension.title}</h3>
								<p className="card-subtitle">{activeDimension.subtitle}</p>
							</div>
						</div>

						<div className="card-body">
							<ul className="feature-list">
								{activeDimension.features.map((feature, idx) => (
									<li key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
										<CheckCircle2 size={18} className="feature-icon" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="card-footer">
							<div className="value-badge">
								<TrendingUp size={16} />
								<span>{activeDimension.value}</span>
							</div>
						</div>
					</div>

					{/* Navigation Controls */}
					<div className="platform-controls">
						<button className="control-btn" onClick={goToPrev} aria-label="Previous">
							<ChevronLeft size={20} />
						</button>
						<div className="progress-dots">
							{enterpriseDimensions.map((_, index) => (
								<button
									key={index}
									className={`progress-dot ${index === activeIndex ? 'active' : ''}`}
									onClick={() => setActiveIndex(index)}
									style={{ '--dot-color': enterpriseDimensions[index].color }}
								/>
							))}
						</div>
						<button className="control-btn play-btn" onClick={togglePlay}>
							{isPlaying ? <Pause size={16} /> : <Play size={16} />}
						</button>
						<button className="control-btn" onClick={goToNext} aria-label="Next">
							<ChevronRight size={20} />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OnePlatformShowcase
