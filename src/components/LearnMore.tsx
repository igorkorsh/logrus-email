import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'
import { cn } from '../utils/classnames'
import { Image } from './Image'
import { Table } from './Table'
import { Text } from './Text'

interface LearnMoreProps extends BaseProps<'a'> {
	text?: string
	arrow?: React.ReactNode
	classNames?: Partial<Record<'text' | 'arrow', string>>
}

export const LearnMore: EmailComponent<LearnMoreProps> = ({
	children,
	href = '#',
	target = '_blank',
	text = 'Learn more',
	classNames,
	arrow = (
		<Image
			src='/static/arrow.png'
			width={16}
			height={16}
			className={cn('float-left', classNames?.arrow)}
		/>
	),
	...props
}) => {
	return (
		<Table
			align='left'
			width='auto'
		>
			<tr>
				<td>
					<Text className={cn('text-base font-bold', classNames?.text)}>
						<a
							{...props}
							href={href}
							target={target}
							className={cn('text-green-600 no-underline')}
						>
							{text}
						</a>
					</Text>
				</td>
				<td className='float-left pt-[2px] pl-1'>{arrow}</td>
			</tr>
		</Table>
	)
}
