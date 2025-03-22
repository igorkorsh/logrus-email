import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'
import { cn } from '../utils/classnames'

interface LinkProps extends BaseProps<'a'> {}

export const Link: EmailComponent<LinkProps> = ({
	children,
	href = '#',
	target = '_blank',
	className,
	...props
}) => {
	const isText = typeof children === 'string'

	return (
		<a
			{...props}
			href={href}
			target={target}
			className={cn('text-green-300 underline', className)}
		>
			{isText ? (
				<span className={cn('text-green-300 underline', className)}>
					{children}
				</span>
			) : (
				children
			)}
		</a>
	)
}
