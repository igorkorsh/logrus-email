import * as React from 'react'

export interface PreviewProps {
	text: string
}

export const Preview = ({ text }: PreviewProps) => {
	const renderHack = () => {
		const MAX_LENGTH = 80
		const pattern = '&#847; &zwnj; &nbsp; &#8199; &shy; '
		return pattern.repeat(MAX_LENGTH - text.length).trimEnd()
	}

	return (
		<React.Fragment>
			<div
				className='max-h-0 overflow-hidden mso-hide-all'
				dangerouslySetInnerHTML={{ __html: text }}
			></div>
			<div
				className='hidden text-[1px] leading-[1px] max-h-0 max-w-0 opacity-0 overflow-hidden mso-hide-all'
				dangerouslySetInnerHTML={{ __html: renderHack() }}
			></div>
		</React.Fragment>
	)
}
