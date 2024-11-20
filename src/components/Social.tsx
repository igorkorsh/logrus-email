import * as React from 'react'
import { LangContext } from './Provider'
import { Table } from './Table'
import { Link } from './Link'
import { Image } from './Image'
import { BaseProps, EmailComponent } from '../types'
import data from '../data/socials.json'

export interface SocialItem {
	url: string
	label: string
}

export interface SocialProps extends BaseProps<'table'> {
	size: number
	gap: number
}

export const Social: EmailComponent<SocialProps> = ({ size, gap, ...props }) => {
	const lang = React.useContext(LangContext)
	const icons: SocialItem[] = data[lang] || []

	return (
		<Table {...props} width={icons.length * (size + gap) - gap}>
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
