import * as React from 'react'
import { Conditional } from './Conditional'
import { Section } from './Section'
import type { BaseProps, EmailComponent } from '../types'
import { cn } from '../utils/classnames'

interface ColumnProps extends BaseProps<'td'> {
	width: number
	parentWidth?: number
}

export const Column: EmailComponent<ColumnProps> = ({
	children,
	width,
	parentWidth,
	...props
}) => (
	<>
		<Conditional
			children={
				parentWidth
					? `<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="${parentWidth}"><tr><td valign="top" style="width: ${width}px">`
					: `</td><td valign="top" style="width: ${width}px">`
			}
		/>
		<div
			className={cn(
				'mobile-column inline-block w-full align-top',
				`max-w-[${width}px]`
			)}
		>
			<Section {...props}>{children}</Section>
		</div>
	</>
)
