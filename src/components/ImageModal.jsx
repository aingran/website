import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import './ImageModal.css'

const ImageModal = ({ isOpen, onClose, imageSrc, altText }) => {
	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEsc)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEsc)
			document.body.style.overflow = 'unset'
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div className="image-modal-overlay" onClick={onClose}>
			<div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="image-modal-close" onClick={onClose} aria-label="Close modal">
					<X size={32} />
				</button>
				<img src={imageSrc} alt={altText} className="image-modal-img" />
			</div>
		</div>
	)
}

export default ImageModal
