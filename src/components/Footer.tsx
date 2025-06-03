import * as React from 'react'
import { Section } from './Section'
import { Row } from './Row'
import { Column } from './Column'
import { Spacer } from './Spacer'
import { Text } from './Text'
import { Link } from './Link'
import { Social } from './Social'
import { Image } from './Image'
import { Mindbox } from '../types'
import { cn } from '../utils/classnames'

export interface FooterProps {
	variant?: 'light' | 'dark' | 'light dark'
}

export const Footer = ({ variant = 'light' }: FooterProps) => {
	const links = [
		{ url: '#', label: 'My Kaspersky' },
		{ url: '#', label: 'FAQ' },
		{ url: '#', label: 'Customer Service' }
	]

	const renderLogo = () => {
		switch (variant) {
			case 'light':
				return (
					<Image
						src='/static/logo.png'
						width={168}
						height={32}
					/>
				)
			case 'dark':
				return (
					<Image
						src='/static/logo-dark.png'
						width={168}
						height={32}
					/>
				)
			case 'light dark':
				return (
					<Image
						src='/static/logo.png'
						darkSrc='/static/logo-dark.png'
						width={168}
						height={32}
					/>
				)
		}
	}

	return (
		<>
			<Section className={cn('mobile-px-5 dark-bg-gray-300 px-8 pt-6 pb-8', `bg-${variant !== 'dark' ? '[#e4e6e7]' : 'gray-300'} `)}>
				<Row>
					<Column
						parentWidth={536}
						width={168}
					>
						<Link href='https://www.kaspersky.com'>{renderLogo()}</Link>
					</Column>
					<Column
						width={64}
						className='h-4'
					/>
					<Column
						width={304}
						className='mobile-py-0 py-1'
					>
						<Social
							variant={variant}
							align='right'
							size={24}
							gap={8}
							className='mobile-float-left float-right'
						/>
					</Column>
				</Row>
				<Spacer size={16} />
				<Text className='text-md dark-text-white font-bold text-gray-600'>
					{links.map(({ url, label }, index) => (
						<React.Fragment key={index}>
							<Link
								href={url}
								className={cn('dark-text-white no-underline', `text-${variant !== 'dark' ? 'black' : 'white'}`)}
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
						<Text className='text-xs text-gray-600'>
							Kaspersky Lab UK Ltd., 1st Floor, 2 Kingdom Street, <br />
							Paddington, W2 6BD, United Kingdom. <br />
							<b>
								<Link href='https://www.kaspersky.com'>www.kaspersky.com</Link>
							</b>
						</Text>
					</Column>
					<Column width={16}></Column>
					<Column
						width={260}
						className='mobile-text-left text-right'
					>
						<Text className='mt-3 text-xs text-gray-600'>
							&copy; {new Date().getFullYear()} AO Kaspersky Lab <br />
							<b>
								<Link href='https://www.kaspersky.com/web-privacy-policy'>Privacy policy</Link>
							</b>
							<span data-mindbox>
								{' | '}
								<b>
									<Link href={Mindbox.UNSUBSCRIBE}>Unsubscribe</Link>
								</b>
							</span>
						</Text>
					</Column>
				</Row>
			</Section>
			<Section
				data-mindbox
				className='mobile-px-5 px-8 py-2'
			>
				<Text className='text-center text-xs text-[#999999]'>
					You are receiving this email at <Link>name@name.com</Link> from <Link>example@kaspersky.com</Link> <br className='mobile-hidden' />
					because you previously agreed to receive emails from Kaspersky.
				</Text>
			</Section>
		</>
	)
}
