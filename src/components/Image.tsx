import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'

export interface ImageProps extends BaseProps<'img'> {
	srcset: string | string[]
	width: number
	height: number
}

// TODO: Переписать
export const Image: EmailComponent<ImageProps> = ({ srcset, width, height, ...props }) => {
	return Array.isArray(srcset) ? (
		<React.Fragment>
			<img
				{...props}
				src={srcset[0]}
				width={width}
				height={height}
				className={`align-top border-none dark-hidden`}
			/>
			<span dangerouslySetInnerHTML={{ __html: '<!--[if !mso]><!-->' }}></span>
			<img
				{...props}
				src={srcset[1]}
				width={width}
				height={height}
				className='hidden border-none dark-block'
			/>
			<span dangerouslySetInnerHTML={{ __html: '<!--<![endif]-->' }}></span>
		</React.Fragment>
	) : (
		<img
			{...props}
			src={srcset}
			width={width}
			height={height}
			className={`align-top border-none`}
		/>
	)
}
