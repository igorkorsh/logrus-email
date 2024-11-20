import clsx from 'clsx'
import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'

export interface LinkProps extends BaseProps<'a'> {
	href?: string
}

export const Link: EmailComponent<LinkProps> = ({
	children,
	href = '#',
	target = '_blank',
	className,
	...props
}) => {
	const defaultStyles = 'text-green-300 underline'
	const isText = typeof children === 'string'

	return (
		<a {...props} href={href} target={target} className={clsx(defaultStyles, className)}>
			{isText ? <span className={clsx(defaultStyles, className)}>{children}</span> : children}
		</a>
	)
}
