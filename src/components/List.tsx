import clsx from 'clsx'
import * as React from 'react'
import { Table } from './Table'
import { Text } from './Text'

export interface ListProps {
	bullet: React.ReactNode
	items: string[]
	gap?: number
	classNames?: Partial<Record<'bullet' | 'text', string | undefined>>
}

export const List = ({ bullet, items, gap = 0, classNames }: ListProps) => {
	const isLastItem = (index: number) => items.length > index + 1
	const defaultStyles = {
		bullet: 'w-6 align-top text-center',
		text: ''
	}

	return (
		<Table>
			{items.map((item, index) => (
				<React.Fragment key={index}>
					<tr>
						<td className={clsx(defaultStyles.bullet, classNames?.bullet)}>{bullet}</td>
						<td className='align-top'>
							<Text
								className={clsx(defaultStyles.text, classNames?.text)}
								dangerouslySetInnerHTML={{ __html: item }}
							></Text>
						</td>
					</tr>
					{gap > 0 && isLastItem(index) && (
						<tr>
							<td colSpan={2} className={`h-[${gap}px] leading-[${gap}px]`}>
								&nbsp;
							</td>
						</tr>
					)}
				</React.Fragment>
			))}
		</Table>
	)
}
