import * as React from 'react'
import { LangContext, Table, Link, Image } from './'
import data from '../data/socials.json'

export interface SocialItem {
	url: string
	label: string
}

export interface SocialProps {
	variant?: 'light' | 'dark' | 'both'
	size: number
	gap: number
}

export const Social = ({ variant = 'light', size, gap }: SocialProps) => {
	const lang = React.useContext(LangContext)
	const icons: SocialItem[] = data[lang] || data['en']

	const getImageSet = (label: string) => {
		switch (variant) {
			case 'light':
				return `/static/${label.toLowerCase()}.png`
			case 'dark':
				return `/static/${label.toLowerCase()}-dark.png`
			case 'both':
				return [`/static/${label.toLowerCase()}.png`, `/static/${label.toLowerCase()}-dark.png`]
		}
	}

	return (
		<Table width={icons.length * (size + gap) - gap} className='float-left'>
			<tr>
				{icons.map(({ url, label }, index) => (
					<td key={index} className={`w-[${size + (index < icons.length - 1 ? gap : 0)}px]`}>
						<Link href={url}>
							<Image srcset={getImageSet(label)} width={size} height={size} />
						</Link>
					</td>
				))}
			</tr>
		</Table>
	)
}
