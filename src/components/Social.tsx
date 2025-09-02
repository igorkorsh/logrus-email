import * as React from 'react'
import { Table } from './Table'
import { Image } from './Image'
import { Link } from './Link'
import { LangContext } from './Provider'
import data from '../data/socials.json'

interface SocialItem {
	[key: string]: string
}

interface SocialProps {
	variant?: 'light' | 'dark' | 'light dark'
	align?: 'left' | 'center' | 'right'
	size: number
	gap: number
	className?: string
}

export const Social = ({
	variant = 'light',
	align = 'left',
	size,
	gap,
	className
}: SocialProps) => {
	const lang = React.useContext(LangContext)
	const icons: SocialItem[] = data[lang] || data['en']

	const renderIcons = (label: string) => {
		switch (variant) {
			case 'light':
				return (
					<Image
						src={`https://media.kaspersky.com/bcma/images/${label.toLowerCase()}.png`}
						width={size}
						height={size}
					/>
				)
			case 'dark':
				return (
					<Image
						src={`https://media.kaspersky.com/bcma/images/${label.toLowerCase()}-dark.png`}
						width={size}
						height={size}
					/>
				)
			case 'light dark':
				return (
					<Image
						src={`https://media.kaspersky.com/bcma/images/${label.toLowerCase()}.png`}
						darkSrc={`https://media.kaspersky.com/bcma/images/${label.toLowerCase()}-dark.png`}
						width={size}
						height={size}
					/>
				)
		}
	}

	const getCellWidth = (index: number) => {
		return size + (index < icons.length - 1 ? gap : 0)
	}

	return (
		<Table
			width={icons.length * (size + gap) - gap}
			align={align}
			className={className}
		>
			<tr>
				{icons.map(({ url, label }, index) => (
					<td
						key={index}
						className={`w-[${getCellWidth(index)}px]`}
					>
						<Link href={url}>{renderIcons(label)}</Link>
					</td>
				))}
			</tr>
		</Table>
	)
}
