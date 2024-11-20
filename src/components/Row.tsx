import clsx from 'clsx'
import * as React from 'react'
import { Section } from './Section'
import { Conditional } from './Conditional'
import type { BaseProps, EmailComponent } from '../types'

export interface RowProps extends BaseProps<'td'> {
	className?: string
}

export const Row: EmailComponent<RowProps> = ({ children, className }) => {
	const defaultStyles = 'text-[0px] align-top'

	return (
		<Section className={clsx(defaultStyles, className)}>
			{children}
			<Conditional children='</td></tr></table>' />
		</Section>
	)
}
