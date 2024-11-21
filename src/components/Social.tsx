import * as React from 'react'
import { LangContext, Table, Link, Image } from './'
import data from '../data/socials.json'

export interface SocialItem {
	url: string
	label: string
}

export interface SocialProps {
	size: number
	gap: number
}

export const Social = ({ size, gap }: SocialProps) => {
	const lang = React.useContext(LangContext)
	const icons: SocialItem[] = data[lang] || data['en']

	return (
		<Table width={icons.length * (size + gap) - gap} className='float-left'>
			<tr>
				{icons.map(({ url, label }, index) => (
					<td key={index} className={`w-[${size + (index < icons.length - 1 ? gap : 0)}px]`}>
						<Link href={url}>
							<Image
								src={`/static/${label.toLowerCase()}.png`}
								srcDark={`/static/${label.toLowerCase()}-dark.png`}
								width={size}
								height={size}
							/>
						</Link>
					</td>
				))}
			</tr>
		</Table>
	)
}
