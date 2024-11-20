import * as React from 'react'
import { Section } from './Section'
import { Link } from './Link'

export const Webview = () => (
	<Section className='px-[32px] py-[8px] font-arial text-[12px] leading-[16px] text-gray-600 text-center'>
		<Link href='${Message.AccessibilityLink}' className='text-gray-600'>
			View email in your browser
		</Link>
		{' | '}
		<Link href='${Message.UnsubscribeLink}' className='text-gray-600'>
			Unsubscribe
		</Link>
	</Section>
)
