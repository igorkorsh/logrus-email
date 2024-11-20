import * as React from 'react'
import { Conditional } from './Conditional'
import { Section } from './Section'
import type { BaseProps, EmailComponent } from '../types'

export interface ColumnProps extends BaseProps<'td'> {
	width: number
	parentWidth?: number
}

export const Column: EmailComponent<ColumnProps> = ({ children, width, parentWidth, ...props }) => (
	<React.Fragment>
		<Conditional
			children={
				!!parentWidth
					? `<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="${parentWidth}"><tr><td valign="top" style="width: ${width}px">`
					: `</td><td valign="top" style="width: ${width}px">`
			}
		/>
		<div className={`inline-block w-full max-w-[${width}px] align-top stack-column`}>
			<Section {...props}>{children}</Section>
		</div>
	</React.Fragment>
)
