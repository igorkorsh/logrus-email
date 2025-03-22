import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'

interface TableProps extends BaseProps<'table'> {}

export const Table: EmailComponent<TableProps> = ({
	children,
	width = '100%',
	...props
}) => (
	<table
		{...props}
		role='presentation'
		cellSpacing={0}
		cellPadding={0}
		border={0}
		width={width}
	>
		{children}
	</table>
)
