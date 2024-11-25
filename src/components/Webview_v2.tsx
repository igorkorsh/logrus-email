import * as React from 'react'
import { Section } from './Section'
import { Link } from './Link'
import { Mindbox } from '../types'

export const Webview_v2 = () => (
	<Section className='px-[32px] py-[16px] font-arial text-[12px] leading-[16px] text-gray-600 text-right'>
		<Link href={Mindbox.ACCESSIBILITY} className='text-gray-600'>
			Веб-версия
		</Link>
	</Section>
)
