import clsx from 'clsx'
import * as React from 'react'
import { Table } from './Table'
import type { BaseProps, EmailComponent } from '../types'

export interface ButtonProps extends BaseProps<'a'> {
	href?: string
	width: number
	keepWhite?: boolean
	classNames?: Partial<Record<'wrapper' | 'link', string | undefined>>
}

export const Button: EmailComponent<ButtonProps> = ({
	children,
	href = '#',
	width,
	keepWhite = true,
	classNames
}) => {
	const defaultStyles = {
		wrapper: 'bg-green-600 rounded-[8px]',
		link: 'block bg-green-600 rounded-[8px] border-solid border-[2px] border-green-600 font-arial text-[16px] leading-[20px] text-center text-white px-[24px] py-[12px] no-underline'
	}

	return (
		<Table align='center' width={width} className='mobile-w-full'>
			<tr>
				<td align='center' className={clsx(defaultStyles.wrapper, classNames?.wrapper)}>
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
