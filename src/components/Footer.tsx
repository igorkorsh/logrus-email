import * as React from 'react'
import { Section, Row, Column, Spacer, Text, Link, Image, Social } from './'
import { Mindbox } from '../types'

export interface FooterProps {
	variant?: 'light' | 'dark' | 'both'
}

export const Footer = ({ variant = 'light' }: FooterProps) => {
	const links = [
		{ url: '#', label: 'My Kaspersky' },
		{ url: '#', label: 'FAQ' },
		{ url: '#', label: 'Customer Service' }
	]

	const getLogo = () => {
		switch (variant) {
			case 'light':
				return `/static/logo.png`
			case 'dark':
				return `/static/logo-dark.png`
			case 'both':
				return [`/static/logo.png`, `/static/logo-dark.png`]
		}
	}

	return (
		<React.Fragment>
			<Section
				className={`bg-${
					variant !== 'dark' ? '[#e4e6e7]' : 'gray-300'
				} pt-[24px] pb-[32px] px-[32px] mobile-px-5 dark-bg-gray-300`}
			>
				<Row>
					<Column parentWidth={536} width={168}>
						<Link href='https://www.kaspersky.com'>
							<Image srcset={getLogo()} width={168} height={32} />
						</Link>
					</Column>
					<Column width={216} className='h-[16px]'></Column>
					<Column width={152} className='py-[4px] float-left mobile-py-0'>
						<Social variant={variant} size={24} gap={8} />
					</Column>
				</Row>
				<Spacer size={16} />
				<Text className='font-bold text-[16px] leading-[20px] text-gray-600 dark-text-white'>
					{links.map(({ url, label }, index) => (
						<React.Fragment key={index}>
							<Link
								href={url}
								className={`text-${
									variant !== 'dark' ? 'black' : 'white'
								} no-underline dark-text-white`}
							>
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
							<Link href={Mindbox.UNSUBSCRIBE} className='font-bold'>
								Unsubscribe
							</Link>
						</Text>
					</Column>
				</Row>
			</Section>
			<Section className='px-[32px] py-[8px] mobile-px-5'>
				<Text className='text-[10px] leading-[12px] text-[#999999] text-center'>
					You are receiving this email at <Link className='font-bold'>name@name.com</Link> from{' '}
					<Link className='font-bold'>example@kaspersky.com</Link> <br className='mobile-hidden' />
					because you previously agreed to receive emails from Kaspersky.
				</Text>
			</Section>
		</React.Fragment>
	)
}
