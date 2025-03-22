import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'
import { cn } from '../utils/classnames'

interface TextProps extends BaseProps<'p'> {}

export const Text: EmailComponent<TextProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<p
			{...props}
			className={cn('font-arial m-0', className)}
		>
			{children}
		</p>
	)
}
