import { useState, useEffect, useRef } from 'react'
import {
	Network,
	FileCode2,
	Radio,
	Brain,
	AlertTriangle,
	Users,
	ArrowRight,
	Play,
	Pause,
	CheckCircle2,
	Zap,
	Shield,
	Database,
	Server,
	Cloud,
	Activity,
	Eye,
	Bell,
	Archive,
	Lock,
	Hash,
	Clock
} from 'lucide-react'
import './HowItWorksFactory.css'

const assemblyStages = [
	{
		id: 'connect',
		icon: Network,
		title: 'Connect to Systems',
		subtitle: 'Universal integration hub',
		description: 'Seamlessly connects to all your enterprise systems - ERP, databases, cloud services - creating a unified monitoring network.',
		systems: ['SAP', 'Oracle', 'Salesforce', 'Azure', 'AWS'],
		color: '#6366f1',
		animation: 'pulse-network'
	},
	{
		id: 'controls',
		icon: FileCode2,
		title: 'Predefined Controls',
		subtitle: 'Control library & definitions',
		description: 'Leverage our extensive library of pre-built control definitions or customize your own. Each control is mapped to business processes.',
		systems: ['SOX', 'COSO', 'SOC2', 'Custom'],
		color: '#8b5cf6',
		animation: 'stack-cards'
	},
	{
		id: 'signals',
		icon: Radio,
		title: 'Signal Collection',
		subtitle: 'Real-time data streams',
		description: 'Continuous signals flow from all connected systems. Every transaction, change, and event is captured in real-time.',
		systems: ['Events', 'Logs', 'Transactions', 'Changes'],
		color: '#06b6d4',
		animation: 'wave-signals'
	},
	{
		id: 'ai-scan',
		icon: Brain,
		title: 'AI Detection',
		subtitle: 'Intelligent analysis engine',
		description: 'Advanced AI continuously scans and analyzes signals, detecting anomalies, patterns, and potential control breaches.',
		systems: ['ML Models', 'Pattern Match', 'Anomaly', 'Risk Score'],
		color: '#ec4899',
		animation: 'brain-scan'
	},
	{
		id: 'evidence',
		icon: Archive,
		title: 'Evidence Repository',
		subtitle: 'Immutable audit trail',
		description: 'All records, evidence, and audit trails are stored immutably with cryptographic hashing, timestamps, and tamper-proof retention policies.',
		systems: ['Immutable', 'Timestamped', 'Hashed', 'Retained'],
		color: '#0ea5e9',
		animation: 'vault-store'
	},
	{
		id: 'dashboard',
		icon: AlertTriangle,
		title: 'Issue Raised',
		subtitle: 'Automated alerting',
		description: 'When issues are detected, they are immediately raised in the dashboard with full context and recommended actions.',
		systems: ['Priority', 'Context', 'Evidence', 'Action'],
		color: '#f59e0b',
		animation: 'alert-pop'
	},
	{
		id: 'human',
		icon: Users,
		title: 'Human Interaction',
		subtitle: 'Collaborative resolution',
		description: 'Teams review, investigate, and resolve issues. Full audit trail maintained for compliance and continuous improvement.',
		systems: ['Assign', 'Review', 'Resolve', 'Close'],
		color: '#22c55e',
		animation: 'team-collab'
	}
]

const HowItWorksFactory = () => {
	const [activeStage, setActiveStage] = useState(0)
	const [isPlaying, setIsPlaying] = useState(true)
	const [isVisible, setIsVisible] = useState(false)
	const containerRef = useRef(null)
	const intervalRef = useRef(null)

	// Auto-progress through stages
	useEffect(() => {
		if (isPlaying && isVisible) {
			intervalRef.current = setInterval(() => {
				setActiveStage((prev) => (prev + 1) % assemblyStages.length)
			}, 4000)
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [isPlaying, isVisible])

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

	const togglePlay = () => {
		setIsPlaying(!isPlaying)
	}

	const currentStage = assemblyStages[activeStage]
	const IconComponent = currentStage.icon

	return (
		<section className="how-it-works-factory" ref={containerRef}>
			<div className="container">
				<div className="factory-header">
					<span className="factory-badge">
						<Zap size={14} />
						How It Works
					</span>
					<h2>The <span className="gradient-text">Continuous Control</span> Assembly Line</h2>
					<p>From signal to resolution — automated, intelligent, and always running.</p>
				</div>

				{/* Assembly Line Visualization */}
				<div className="assembly-line-container">
					{/* Conveyor Belt SVG */}
					<svg className="conveyor-belt" viewBox="0 0 1200 120" preserveAspectRatio="xMidYMid meet">
						{/* Belt base */}
						<rect x="0" y="50" width="1200" height="20" rx="10" className="belt-base" />

						{/* Belt rollers */}
						{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
							<circle key={i} cx={50 + i * 100} cy="60" r="15" className="belt-roller" />
						))}

						{/* Moving dashes on belt */}
						<g className="belt-motion">
							{[...Array(24)].map((_, i) => (
								<rect key={i} x={i * 50} y="55" width="30" height="2" rx="1" className="belt-dash" />
							))}
						</g>

						{/* Signal flow particles */}
						<g className="signal-particles">
							{[...Array(8)].map((_, i) => (
								<circle
									key={i}
									r="4"
									className={`signal-particle ${activeStage >= 2 ? 'active' : ''}`}
									style={{ animationDelay: `${i * 0.3}s` }}
								>
									<animateMotion
										dur="3s"
										repeatCount="indefinite"
										begin={`${i * 0.3}s`}
										path="M0,40 L1200,40"
									/>
								</circle>
							))}
						</g>
					</svg>

					{/* Stage Stations */}
					<div className="assembly-stations">
						{assemblyStages.map((stage, index) => {
							const StageIcon = stage.icon
							const isActive = index === activeStage
							const isPast = index < activeStage

							return (
								<button
									key={stage.id}
									className={`assembly-station ${isActive ? 'active' : ''} ${isPast ? 'completed' : ''}`}
									onClick={() => setActiveStage(index)}
									style={{ '--station-color': stage.color }}
								>
									{/* Station pillar */}
									<div className="station-pillar">
										<div className="pillar-light" />
									</div>

									{/* Station head */}
									<div className="station-head">
										<div className="station-icon">
											<StageIcon size={isActive ? 28 : 22} />
											{isActive && <span className="icon-pulse" />}
										</div>
										{isPast && (
											<div className="completed-check">
												<CheckCircle2 size={14} />
											</div>
										)}
									</div>

									{/* Station label */}
									<span className="station-label">{stage.title.split(' ')[0]}</span>

									{/* Connection line to next station */}
									{index < assemblyStages.length - 1 && (
										<div className={`station-connector ${isPast ? 'active' : ''}`}>
											<ArrowRight size={16} />
										</div>
									)}
								</button>
							)
						})}
					</div>
				</div>

				{/* Active Stage Detail Panel */}
				<div className="stage-detail-panel" style={{ '--accent-color': currentStage.color }}>
					<div className="panel-glow" />

					{/* Visual Animation Zone */}
					<div className="stage-visualization">
						{currentStage.id === 'connect' && (
							<div className="viz-connect">
								<div className="central-hub">
									<Shield size={32} />
									<span>CCM</span>
								</div>
								{currentStage.systems.map((sys, i) => (
									<div
										key={sys}
										className="system-node"
										style={{
											'--angle': `${(i * 72) - 90}deg`,
											'--delay': `${i * 0.1}s`
										}}
									>
										<Server size={16} />
										<span>{sys}</span>
									</div>
								))}
								<svg className="connect-lines" viewBox="0 0 200 200">
									{[0, 1, 2, 3, 4].map((i) => (
										<line
											key={i}
											x1="100" y1="100"
											x2={100 + 70 * Math.cos((i * 72 - 90) * Math.PI / 180)}
											y2={100 + 70 * Math.sin((i * 72 - 90) * Math.PI / 180)}
											className="connect-line"
											style={{ animationDelay: `${i * 0.15}s` }}
										/>
									))}
								</svg>
							</div>
						)}

						{currentStage.id === 'controls' && (
							<div className="viz-controls">
								{currentStage.systems.map((ctrl, i) => (
									<div
										key={ctrl}
										className="control-card"
										style={{ '--delay': `${i * 0.1}s` }}
									>
										<FileCode2 size={18} />
										<span>{ctrl}</span>
									</div>
								))}
							</div>
						)}

						{currentStage.id === 'signals' && (
							<div className="viz-signals">
								<div className="signal-tower">
									<Radio size={32} />
									<div className="signal-waves">
										<span className="wave wave-1" />
										<span className="wave wave-2" />
										<span className="wave wave-3" />
									</div>
								</div>
								<div className="signal-streams">
									{currentStage.systems.map((sig, i) => (
										<div key={sig} className="signal-stream" style={{ '--delay': `${i * 0.2}s` }}>
											<Activity size={16} />
											<span>{sig}</span>
										</div>
									))}
								</div>
							</div>
						)}

						{currentStage.id === 'ai-scan' && (
							<div className="viz-ai">
								<div className="ai-brain">
									<Brain size={48} />
									<div className="scan-ring ring-1" />
									<div className="scan-ring ring-2" />
									<div className="scan-ring ring-3" />
								</div>
								<div className="ai-outputs">
									{currentStage.systems.map((out, i) => (
										<div key={out} className="ai-output" style={{ '--delay': `${i * 0.15}s` }}>
											<Eye size={14} />
											<span>{out}</span>
										</div>
									))}
								</div>
							</div>
						)}

						{currentStage.id === 'evidence' && (
							<div className="viz-evidence">
								<div className="evidence-vault">
									<div className="vault-door">
										<Lock size={28} />
										<div className="vault-shine" />
									</div>
									<div className="vault-blocks">
										{[0, 1, 2, 3, 4, 5].map((i) => (
											<div
												key={i}
												className="evidence-block"
												style={{ '--delay': `${i * 0.15}s` }}
											>
												<Database size={12} />
											</div>
										))}
									</div>
								</div>
								<div className="evidence-features">
									{currentStage.systems.map((feat, i) => {
										const icons = [Lock, Clock, Hash, Archive]
										const FeatureIcon = icons[i] || Lock
										return (
											<div key={feat} className="evidence-feature" style={{ '--delay': `${i * 0.12}s` }}>
												<FeatureIcon size={14} />
												<span>{feat}</span>
											</div>
										)
									})}
								</div>
							</div>
						)}

						{currentStage.id === 'dashboard' && (
							<div className="viz-dashboard">
								<div className="alert-popup">
									<AlertTriangle size={32} />
									<span className="alert-badge">Issue Detected</span>
								</div>
								<div className="alert-details">
									{currentStage.systems.map((det, i) => (
										<div key={det} className="alert-detail" style={{ '--delay': `${i * 0.1}s` }}>
											<Bell size={14} />
											<span>{det}</span>
										</div>
									))}
								</div>
							</div>
						)}

						{currentStage.id === 'human' && (
							<div className="viz-human">
								<div className="team-circle">
									{[0, 1, 2, 3].map((i) => (
										<div key={i} className="team-member" style={{ '--angle': `${i * 90}deg` }}>
											<Users size={20} />
										</div>
									))}
									<div className="resolution-badge">
										<CheckCircle2 size={24} />
									</div>
								</div>
								<div className="workflow-steps">
									{currentStage.systems.map((step, i) => (
										<div key={step} className="workflow-step" style={{ '--delay': `${i * 0.15}s` }}>
											<span className="step-num">{i + 1}</span>
											<span>{step}</span>
										</div>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Stage Info */}
					<div className="stage-info">
						<div className="stage-header">
							<div className="stage-icon-wrapper">
								<IconComponent size={28} />
							</div>
							<div className="stage-title-section">
								<span className="stage-number">Stage {activeStage + 1} of {assemblyStages.length}</span>
								<h3>{currentStage.title}</h3>
								<p className="stage-subtitle">{currentStage.subtitle}</p>
							</div>
						</div>
						<p className="stage-description">{currentStage.description}</p>
					</div>
				</div>

				{/* Progress Controls */}
				<div className="factory-controls">
					<div className="progress-bar">
						{assemblyStages.map((stage, index) => (
							<button
								key={stage.id}
								className={`progress-segment ${index === activeStage ? 'active' : ''} ${index < activeStage ? 'completed' : ''}`}
								onClick={() => setActiveStage(index)}
								style={{ '--segment-color': stage.color }}
							>
								<span className="segment-fill" />
							</button>
						))}
					</div>
					<button className="play-control" onClick={togglePlay}>
						{isPlaying ? <Pause size={20} /> : <Play size={20} />}
					</button>
				</div>
			</div>
		</section>
	)
}

export default HowItWorksFactory
