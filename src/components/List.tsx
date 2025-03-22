import * as React from 'react'
import { Table } from './Table'
import { Spacer } from './Spacer'
import { Text } from './Text'
import { cn } from '../utils/classnames'

interface ListProps {
	items: React.ReactNode[]
	bullet: React.ReactNode
	gap?: number
	classNames?: Partial<Record<'bullet' | 'text', string>>
}

export const List = ({ items, bullet, gap = 0, classNames }: ListProps) => {
	return (
		<Table>
			{items.map((item, index) => (
				<tbody key={index}>
					<tr>
						<td className={cn('w-6 text-center align-top', classNames?.bullet)}>
							{bullet}
						</td>
						<td className='align-top'>
							{typeof item === 'string' || typeof item === 'number' ? (
								<Text className={classNames?.text}>{item}</Text>
							) : (
								item
							)}
						</td>
					</tr>
					{gap > 0 && items.length > index + 1 && (
						<tr>
							<td colSpan={2}>
								<Spacer size={gap} />
							</td>
						</tr>
					)}
				</tbody>
			))}
		</Table>
	)
}
