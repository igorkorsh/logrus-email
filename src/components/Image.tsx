import * as React from 'react'
import { ColorSchemeContext } from './Provider'
import type { BaseProps, EmailComponent } from '../types'

export interface ImageProps extends BaseProps<'img'> {
	src: string
	srcDark?: string
	width: number
	height: number
}

export const Image: EmailComponent<ImageProps> = ({ src, srcDark, width, height, ...props }) => {
	const colorScheme = React.useContext(ColorSchemeContext)

	return (
		<React.Fragment>
			<img
				{...props}
				src={src}
				width={width}
				height={height}
				className='align-top border-none dark-hidden'
			/>
			{colorScheme === 'light dark' && srcDark && (
				<React.Fragment>
					<span dangerouslySetInnerHTML={{ __html: '<!--[if !mso]><!-->' }}></span>
					<img
						{...props}
						src={srcDark}
						width={width}
						height={height}
						className='hidden border-none dark-block'
					/>
					<span dangerouslySetInnerHTML={{ __html: '<!--<![endif]-->' }}></span>
				</React.Fragment>
			)}
		</React.Fragment>
	)
}
