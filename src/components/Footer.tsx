import * as React from 'react'
import { Section } from './Section'
import { Row } from './Row'
import { Column } from './Column'
import { Spacer } from './Spacer'
import { Text } from './Text'
import { Link } from './Link'
import { Image } from './Image'
import { Social } from './Social'

export const Footer = () => {
	const links = [
		{ url: '#', label: 'My Kaspersky' },
		{ url: '#', label: 'FAQ' },
		{ url: '#', label: 'Customer Service' }
	]

	return (
		<Section className='bg-[#e4e6e7] pt-[24px] pb-[32px] px-[32px] mobile-px-5 dark-bg-gray-300'>
			<Row>
				<Column parentWidth={536} width={168}>
					<Link href='https://www.kaspersky.com'>
						<Image src='/static/logo.png' srcDark='/static/logo-dark.png' width={168} height={32} />
					</Link>
				</Column>
				<Column width={216} className='h-[16px]'></Column>
				<Column width={152} className='py-[4px] mobile-py-0 mobile-float-left'>
					<Social size={24} gap={8} />
				</Column>
			</Row>
			<Spacer size={16} />
			<Text className='font-bold text-[16px] leading-[20px] text-gray-600 dark-text-white'>
				{links.map(({ url, label }, index) => (
					<React.Fragment key={index}>
						<Link href={url} className='text-black no-underline dark-text-white'>
							{label}
						</Link>
						{index < links.length - 1 && ' | '}
					</React.Fragment>
				))}
			</Text>
			<Spacer size={16} />
			<Row>
				<Column width={260}>
					<Text className='text-[10px] leading-[12px] text-gray-600'>
						Kaspersky Lab UK Ltd., 1st Floor, 2 Kingdom Street, <br />
						Paddington, W2 6BD, United Kingdom. <br />
						<Link href='https://www.kaspersky.com' className='font-bold'>
							www.kaspersky.com
						</Link>
					</Text>
				</Column>
				<Column width={16}></Column>
				<Column width={260} className='text-right mobile-text-left'>
					<Text className='mt-[12px] text-[10px] leading-[12px] text-gray-600'>
						&copy; {new Date().getFullYear()} AO Kaspersky Lab <br />
						<Link href='https://www.kaspersky.com/web-privacy-policy' className='font-bold'>
							Privacy policy
						</Link>
						{' | '}
						<Link href='${Message.UnsubscribeLink}' className='font-bold'>
							Unsubscribe
						</Link>
					</Text>
				</Column>
			</Row>
		</Section>
	)
}
