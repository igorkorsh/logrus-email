import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'
import { cn } from '../utils/classnames'
import { Table } from './Table'

interface ButtonProps extends BaseProps<'a'> {
	href: string
	align: 'left' | 'center' | 'right'
	width: number
	keepWhite: boolean
	classNames: Partial<Record<'base' | 'wrapper' | 'link', string>>
}

export const Button: EmailComponent<Partial<ButtonProps>> = ({
	children,
	href = '#',
	align = 'center',
	width,
	keepWhite = true,
	classNames
}) => {
	return (
		<Table
			align={align}
			width={width}
			className={cn('mobile-w-full', classNames?.base)}
		>
			<tr>
				<td
					align='center'
					className={cn(
						'h-[48px] rounded-[8px] bg-green-600',
						classNames?.wrapper
					)}
				>
					<a
						href={href}
						target='_blank'
						className={cn(
							'font-arial text-md block rounded-[8px] bg-green-600 px-6 py-3 text-center text-white no-underline',
							classNames?.link
						)}
					>
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
