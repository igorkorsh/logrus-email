import clsx from 'clsx'
import * as React from 'react'
import { Table } from './Table'
import type { BaseProps, EmailComponent } from '../types'

export interface ButtonProps extends BaseProps<'a'> {
	href?: string
	width: number
	align?: 'left' | 'center' | 'right'
	keepWhite?: boolean
	stretch?: boolean
	classNames?: Partial<Record<'table' | 'wrapper' | 'link', string | undefined>>
}

export const Button: EmailComponent<ButtonProps> = ({
	children,
	href = '#',
	width,
	align = 'center',
	keepWhite = true,
	stretch = true,
	classNames
}) => {
	const defaultStyles = {
		table: stretch ? 'mobile-w-full' : '',
		wrapper: 'bg-green-600 rounded-[8px]',
		link: 'block bg-green-600 rounded-[8px] border-solid border-[2px] border-green-600 font-arial text-md text-center text-white px-6 py-3 no-underline'
	}

	return (
		<Table align={align} width={width} className={clsx(defaultStyles.table, classNames?.table)}>
			<tr>
				<td className={clsx(defaultStyles.wrapper, classNames?.wrapper)}>
					<a href={href} target='_blank' className={clsx(defaultStyles.link, classNames?.link)}>
						{keepWhite ? (
							<span className='gmail-screen'>
								<span className='gmail-difference'>{children}</span>
							</span>
						) : (
							children
						)}
					</a>
				</td>
			</tr>
		</Table>
	)
}
