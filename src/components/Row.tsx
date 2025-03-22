import * as React from 'react'
import { Section } from './Section'
import { Conditional } from './Conditional'
import type { BaseProps, EmailComponent } from '../types'
import { cn } from '../utils/classnames'

interface RowProps extends BaseProps<'td'> {}

export const Row: EmailComponent<RowProps> = ({ children, className }) => {
	return (
		<Section className={cn('align-top text-[0px]', className)}>
			{children}
			<Conditional children='</td></tr></table>' />
		</Section>
	)
}
