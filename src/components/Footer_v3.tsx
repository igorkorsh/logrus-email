import * as React from 'react'
import { Section } from './Section'
import { Row } from './Row'
import { Column } from './Column'
import { Link } from './Link'
import { Social } from './Social'
import { Image } from './Image'
import { cn } from '../utils/classnames'
import { FooterProps } from './Footer'

export const Footer_v3 = ({ variant = 'light' }: FooterProps) => {
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
			<Section className={cn('mobile-px-5 dark-bg-gray-300 px-8 pt-6 pb-8', `bg-${variant !== 'dark' ? 'white' : 'gray-300'} `)}>
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
			</Section>
		</>
	)
}
