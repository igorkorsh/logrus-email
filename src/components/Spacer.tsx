import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'
import { cn } from '../utils/classnames'

interface SpacerProps extends BaseProps<'div'> {
	size: number
}

export const Spacer: EmailComponent<SpacerProps> = ({
	size,
	className,
	...props
}) => {
	return (
		<div
			{...props}
			className={cn(`h-[${size}px] leading-[${size}px]`, className)}
			aria-hidden='true'
			dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
		/>
	)
}
