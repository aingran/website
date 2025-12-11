import { Quote } from 'lucide-react'
import './Testimonial.css'

function Testimonial({ quote, author, role, company }) {
	return (
		<div className="testimonial card">
			<Quote size={32} className="testimonial-quote-icon" />
			<p className="testimonial-text">{quote}</p>
			<div className="testimonial-author">
				<div className="testimonial-avatar">
					{author.charAt(0)}
				</div>
				<div className="testimonial-info">
					<span className="testimonial-name">{author}</span>
					<span className="testimonial-role">{role}, {company}</span>
				</div>
			</div>
		</div>
	)
}

export default Testimonial
