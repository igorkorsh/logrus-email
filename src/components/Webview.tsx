import * as React from 'react'
import { Section } from './Section'
import { Link } from './Link'
import { Mindbox } from '../types'
import { LangContext } from './Provider'
import { Text } from './Text'
import { cn } from '../utils/classnames'

interface WebviewProps {
	classNames?: Partial<Record<'base' | 'text' | 'link', string>>
}

export const Webview = ({ classNames }: WebviewProps) => {
	const lang = React.useContext(LangContext)
	const linkStyles = cn('text-gray-600', classNames?.link)

	return (
		<Section
			data-mindbox
			className={cn('px-8', lang === 'ru' ? 'py-4' : 'py-2', classNames?.base)}
		>
			<Text
				className={cn(
					'text-sm text-gray-600',
					lang === 'ru' ? 'text-right' : 'text-center',
					classNames?.text
				)}
			>
				{lang === 'ru' ? (
					<Link
						href={Mindbox.ACCESSIBILITY}
						className={linkStyles}
					>
						Веб-версия
					</Link>
				) : (
					<>
						<Link
							href={Mindbox.ACCESSIBILITY}
							className={linkStyles}
						>
							View email in your browser
						</Link>
						{' | '}
						<Link
							href={Mindbox.UNSUBSCRIBE}
							className={linkStyles}
						>
							Unsubscribe
						</Link>
					</>
				)}
			</Text>
		</Section>
	)
}
