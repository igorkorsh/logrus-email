import clsx from 'clsx'
import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'

export interface SpacerProps extends BaseProps<'div'> {
	size: number
}

export const Spacer: EmailComponent<SpacerProps> = ({ size, className, ...props }) => {
	const defaultStyles = `h-[${size}px] leading-[${size}px]`

	return (
		<div
			{...props}
			className={clsx(defaultStyles, className)}
			aria-hidden='true'
			dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
		></div>
	)
}
