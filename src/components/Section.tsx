import * as React from 'react'
import { Table } from './Table'
import { Spacer } from './Spacer'
import type { BaseProps, EmailComponent } from '../types'

interface SectionProps extends BaseProps<'td'> {
	gap?: number
}

export const Section: EmailComponent<SectionProps> = ({ children, gap, ...props }) => {
	let content = children

	if (gap) {
		const childrenArray = React.Children.toArray(children)
		content = childrenArray.flatMap((child, idx) =>
			idx < childrenArray.length - 1
				? [
						child,
						<Spacer
							key={idx}
							size={gap}
						/>
					]
				: [child]
		)
	}

	return (
		<Table>
			<tr>
				<td {...props}>{content}</td>
			</tr>
		</Table>
	)
}
