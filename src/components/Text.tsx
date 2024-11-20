import clsx from 'clsx'
import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'

export interface TextProps extends BaseProps<'p'> {}

export const Text: EmailComponent<TextProps> = ({ children, className, ...props }) => {
	const defaultStyles = 'm-0 font-arial'

	return (
		<p {...props} className={clsx(defaultStyles, className)}>
			{children}
		</p>
	)
}
