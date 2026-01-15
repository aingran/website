import { useState, useEffect, useRef } from 'react'
import {
	ClipboardList,
	Gavel,
	BadgeDollarSign,
	Landmark,
	Users,
	Bell,
	FolderSearch,
	AlertTriangle,
	Globe,
	EyeOff,
	TrendingUp,
	Play,
	Pause,
	ChevronLeft,
	ChevronRight
} from 'lucide-react'
import './ChallengesShowcase.css'

const challenges = [
	{
		id: 1,
		icon: ClipboardList,
		title: 'Audit and internal compliance gaps',
		points: [
			'Audit findings & qualifications',
			'Increased audit cost and remediation effort'
		],
		color: '#6366f1'
	},
	{
		id: 2,
		icon: Gavel,
		title: 'Regulatory and statutory non-compliances',
		points: [
			'Regulatory penalties & fines',
			'License risks, legal exposure, reputational damage'
		],
		color: '#8b5cf6'
	},
	{
		id: 3,
		icon: BadgeDollarSign,
		title: 'Trade and financial non-compliances',
		points: [
			'Direct financial loss (leakage, penalties, write-offs)',
			'Working capital stress',
			'Investor and market confidence erosion'
		],
		color: '#ec4899'
	},
	{
		id: 4,
		icon: Landmark,
		title: 'Regulator and board-level pressure',
		points: [
			'Governance failures',
			'Loss of trust with regulators and auditors'
		],
		color: '#f43f5e'
	},
	{
		id: 5,
		icon: Users,
		title: 'Fragmented compliance ownership',
		points: [
			'Delayed remediation',
			'Repeated audit findings year over year'
		],
		color: '#f97316'
	},
	{
		id: 6,
		icon: Bell,
		title: 'Reactive, after-the-fact compliance',
		points: [
			'Violations accumulate before detection',
			'Large-scale cleanups instead of small corrections'
		],
		color: '#eab308'
	},
	{
		id: 7,
		icon: FolderSearch,
		title: 'Lack of evidence readiness',
		points: [
			'Audit fatigue across teams',
			'Higher audit fees and extended audit cycles'
		],
		color: '#22c55e'
	},
	{
		id: 8,
		icon: AlertTriangle,
		title: 'Exception overload with no prioritization',
		points: [
			'Critical risks missed',
			'False sense of compliance'
		],
		color: '#14b8a6'
	},
	{
		id: 9,
		icon: Globe,
		title: 'Inconsistent control execution across Geographies',
		points: [
			'Regional non-compliance',
			'Cross-border audit complications'
		],
		color: '#06b6d4'
	},
	{
		id: 10,
		icon: EyeOff,
		title: 'Technology blind spots in core ERP processes',
		points: [
			'Fraud exposure',
			'Control circumvention risks'
		],
		color: '#3b82f6'
	},
	{
		id: 11,
		icon: TrendingUp,
		title: 'Rising cost of compliance',
		points: [
			'Margin erosion',
			'Unsustainable compliance model'
		],
		color: '#6366f1'
	}
]

const ChallengesShowcase = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isPlaying, setIsPlaying] = useState(true)
	const [isVisible, setIsVisible] = useState(false)
	const containerRef = useRef(null)
	const intervalRef = useRef(null)

	// Auto-progress through challenges
	useEffect(() => {
		if (isPlaying && isVisible) {
			intervalRef.current = setInterval(() => {
				setActiveIndex((prev) => (prev + 1) % challenges.length)
			}, 4000)
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
		setActiveIndex((prev) => (prev + 1) % challenges.length)
	}

	const goToPrev = () => {
		setActiveIndex((prev) => (prev - 1 + challenges.length) % challenges.length)
	}

	const togglePlay = () => {
		setIsPlaying(!isPlaying)
	}

	const activeChallenge = challenges[activeIndex]
	const IconComponent = activeChallenge.icon

	return (
		<section className="challenges-showcase" ref={containerRef}>
			<div className="container">
				<div className="showcase-header">
					<span className="showcase-badge">Enterprise Pain Points</span>
					<h2>Top Compliance Challenges faced by Enterprises</h2>
					<p>Common gaps that drive risk, cost, and regulator pressure</p>
				</div>

				<div className="showcase-content">
					{/* Arc Timeline */}
					<div className="challenges-arc">
						<div className="arc-container">
							{/* Background arc glow */}
							<div className="arc-glow" />

							{challenges.map((challenge, index) => {
								// Calculate relative position with circular wrapping
								const totalItems = challenges.length
								let relativeIndex = index - activeIndex

								// Wrap around for circular effect
								if (relativeIndex > totalItems / 2) {
									relativeIndex -= totalItems
								} else if (relativeIndex < -totalItems / 2) {
									relativeIndex += totalItems
								}

								// Only show 7 items: current + 3 on each side
								if (Math.abs(relativeIndex) > 3) return null

								// Arc positioning - wide shallow arc like a horizon
								const arcSpan = 60 // angle span for 7 items
								const angleStep = arcSpan / 6 // 7 visible items = 6 steps
								const centerAngle = 90 // top center (curves upward)
								const angle = centerAngle + relativeIndex * angleStep

								// Convert to radians and calculate position
								const angleRad = (angle * Math.PI) / 180
								const radius = 500 // large radius for wide horizon effect
								const x = Math.cos(angleRad) * radius
								// Calculate Y offset from the arc top (radius - y gives distance from bottom of arc)
								const rawY = Math.sin(angleRad) * radius
								const yOffset = radius - rawY // This makes center highest, sides lower

								// Calculate distance from active for scaling
								const distance = Math.abs(relativeIndex)
								const isActive = index === activeIndex
								const scale = isActive ? 1.5 : Math.max(0.6, 1 - distance * 0.15)
								const opacity = isActive ? 1 : Math.max(0.4, 1 - distance * 0.2)

								return (
									<button
										key={challenge.id}
										className={`arc-dot ${isActive ? 'active' : ''}`}
										onClick={() => setActiveIndex(index)}
										style={{
											'--dot-color': challenge.color,
											'--x': `${x}px`,
											'--y': `${yOffset}px`,
											'--scale': scale,
											'--opacity': opacity,
											'--distance': distance
										}}
										aria-label={`Go to challenge ${challenge.id}`}
									>
										<span className="arc-dot-inner">
											<span className="arc-dot-number">{challenge.id}</span>
										</span>
										{isActive && <span className="arc-dot-ring" />}
										{isActive && <span className="arc-dot-pulse" />}
									</button>
								)
							})}

							{/* Center highlight effect */}
							<div className="arc-center-glow" style={{ '--accent-color': challenges[activeIndex].color }} />
						</div>
					</div>

					{/* Main Display Card */}
					<div className="showcase-main">
						<div
							className="showcase-card"
							style={{ '--accent-color': activeChallenge.color }}
						>
							<div className="card-glow" />

							<div className="card-header">
								<div className="card-icon-wrapper">
									<div className="card-icon-bg">
										<IconComponent size={40} />
									</div>
									<div className="card-number">{activeChallenge.id}</div>
								</div>
							</div>

							<div className="card-body">
								<h3 className="card-title">{activeChallenge.title}</h3>
								<ul className="card-points">
									{activeChallenge.points.map((point, idx) => (
										<li key={idx} style={{ animationDelay: `${idx * 0.15}s` }}>
											<span className="point-icon">⚠</span>
											{point}
										</li>
									))}
								</ul>
							</div>

							<div className="card-footer">
								<div className="challenge-counter">
									<span className="current">{String(activeIndex + 1).padStart(2, '0')}</span>
									<span className="separator">/</span>
									<span className="total">{String(challenges.length).padStart(2, '0')}</span>
								</div>
							</div>
						</div>

						{/* Navigation Controls */}
						<div className="showcase-controls">
							<button className="control-btn" onClick={goToPrev} aria-label="Previous challenge">
								<ChevronLeft size={24} />
							</button>
							<button className="control-btn play-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
								{isPlaying ? <Pause size={20} /> : <Play size={20} />}
							</button>
							<button className="control-btn" onClick={goToNext} aria-label="Next challenge">
								<ChevronRight size={24} />
							</button>
						</div>
					</div>

					{/* Side Preview Cards */}
					<div className="preview-cards">
						{challenges.map((challenge, index) => {
							const PreviewIcon = challenge.icon
							const offset = index - activeIndex
							const isActive = index === activeIndex

							// Only show nearby cards
							if (Math.abs(offset) > 2) return null

							return (
								<div
									key={challenge.id}
									className={`preview-card ${isActive ? 'active' : ''}`}
									style={{
										'--offset': offset,
										'--accent-color': challenge.color
									}}
									onClick={() => setActiveIndex(index)}
								>
									<div className="preview-icon">
										<PreviewIcon size={20} />
									</div>
									<span className="preview-number">{challenge.id}</span>
									<span className="preview-title">{challenge.title}</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ChallengesShowcase
