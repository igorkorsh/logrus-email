import * as React from 'react'
import { Table } from './Table'
import type { BaseProps, EmailComponent } from '../types'

export interface SectionProps extends BaseProps<'td'> {}

export const Section: EmailComponent<SectionProps> = ({ children, ...props }) => (
	<Table>
		<tr>
			<td {...props}>{children}</td>
		</tr>
	</Table>
)
