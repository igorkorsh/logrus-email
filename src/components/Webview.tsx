import clsx from 'clsx'
import * as React from 'react'
import { Section } from './Section'
import { Link } from './Link'
import { Mindbox } from '../types'
import { LangContext } from './Provider'

export interface WebviewProps {
	className?: string
}

export const Webview = ({ className }: WebviewProps) => {
	const lang = React.useContext(LangContext)

	switch (lang) {
		case 'ru':
			return (
				<Section
					className={clsx('px-8 font-arial text-sm text-gray-600 py-4 text-right', className)}
				>
					<Link href={Mindbox.ACCESSIBILITY} className='text-gray-600'>
						Веб-версия
					</Link>
				</Section>
			)
		default:
			return (
				<Section
					className={clsx('px-8 font-arial text-sm text-gray-600 py-2 text-center', className)}
				>
					<Link href={Mindbox.ACCESSIBILITY} className='text-gray-600'>
						View email in your browser
					</Link>
					{' | '}
					<Link href={Mindbox.UNSUBSCRIBE} className='text-gray-600'>
						Unsubscribe
					</Link>
				</Section>
			)
	}
}
