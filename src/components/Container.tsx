import * as React from 'react'
import { Conditional } from './Conditional'
import { Table } from './Table'
import type { BaseProps, EmailComponent } from '../types'

export interface ContainerProps extends BaseProps<'td'> {
	width?: number
}

export const Container: EmailComponent<ContainerProps> = ({ children, width = 600, ...props }) => (
	<div className={`max-w-[${width}px] mx-auto email-container`}>
		<Conditional
			children={`<table align="center" role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}"><tr><td>`}
		/>
		<Table align='center' className='m-auto'>
			<tr>
				<td {...props}>{children}</td>
			</tr>
		</Table>
		<Conditional children='</td></tr></table>' />
	</div>
)