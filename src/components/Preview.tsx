import * as React from 'react'

interface PreviewProps {
	text: string
}

export const Preview = ({ text }: PreviewProps) => {
	const renderHack = () => {
		const MAX_LENGTH = 80
		const pattern = '&#847; &zwnj; &nbsp; &#8199; &shy; '
		return pattern.repeat(Math.max(MAX_LENGTH - text.length, 0)).trimEnd()
	}

	return (
		<React.Fragment>
			<div
				className='mso-hide-all max-h-0 overflow-hidden'
				dangerouslySetInnerHTML={{ __html: text }}
			></div>
			<div
				className='mso-hide-all hidden max-h-0 max-w-0 overflow-hidden text-[1px] leading-[1px] opacity-0'
				dangerouslySetInnerHTML={{ __html: renderHack() }}
			></div>
		</React.Fragment>
	)
}
