import clsx from 'clsx'
import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'

export interface ImageProps extends BaseProps<'img'> {
	srcset: string | string[]
	width: number
	height: number
}

export const Image: EmailComponent<ImageProps> = ({
	srcset,
	width,
	height,
	className,
	...props
}) => {
	return Array.isArray(srcset) ? (
		<React.Fragment>
			<img
				{...props}
				src={srcset[0]}
				width={width}
				height={height}
				className={clsx('align-top border-none dark-hidden', className)}
			/>
			<span dangerouslySetInnerHTML={{ __html: '<!--[if !mso]><!-->' }}></span>
			<img
				{...props}
				src={srcset[1]}
				width={width}
				height={height}
				className={clsx('hidden border-none dark-block', className)}
			/>
			<span dangerouslySetInnerHTML={{ __html: '<!--<![endif]-->' }}></span>
		</React.Fragment>
	) : (
		<img
			{...props}
			src={srcset}
			width={width}
			height={height}
			className={clsx('align-top border-none', className)}
		/>
	)
}
