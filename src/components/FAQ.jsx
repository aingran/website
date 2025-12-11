import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

function FAQ({ items }) {
	const [openIndex, setOpenIndex] = useState(null)

	const toggleItem = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className="faq-list">
			{items.map((item, index) => (
				<div
					key={index}
					className={`faq-item ${openIndex === index ? 'active' : ''}`}
				>
					<button
						className="faq-question"
						onClick={() => toggleItem(index)}
						aria-expanded={openIndex === index}
					>
						<span>{item.question}</span>
						<ChevronDown size={20} className="faq-icon" />
					</button>
					<div className="faq-answer">
						<p>{item.answer}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default FAQ
