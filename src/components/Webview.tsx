import * as React from 'react'
import { Section } from './Section'
import { Link } from './Link'
import { Mindbox } from '../types'
import { LangContext } from './Provider'

export const Webview = () => {
	const lang = React.useContext(LangContext)

	switch (lang) {
		case 'ru':
			return (
				<Section className='px-8 py-4 font-arial text-sm text-gray-600 text-right'>
					<Link href={Mindbox.ACCESSIBILITY} className='text-gray-600'>
						Веб-версия
					</Link>
				</Section>
			)
		default:
			return (
				<Section className='px-8 py-2 font-arial text-sm text-gray-600 text-center'>
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
