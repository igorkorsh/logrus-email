import * as React from 'react'
import { LangContext } from './Provider'
import { Section } from './Section'
import { Row } from './Row'
import { Column } from './Column'
import { Spacer } from './Spacer'
import { Text } from './Text'
import { Link } from './Link'
import { Social } from './Social'
import { Image } from './Image'
import { Mindbox } from '../types'
import { FooterProps } from './Footer'
import { Copyright } from './Copyright'
import { cn } from '../utils/classnames'

export const Footer_v2 = ({ variant = 'light', className }: FooterProps) => {
	const lang = React.useContext(LangContext)

	const renderLogo = () => {
		switch (variant) {
			case 'light':
				return (
					<Image
						src='/static/logo.png'
						width={137}
						height={26}
					/>
				)
			case 'dark':
				return (
					<Image
						src='/static/logo-dark.png'
						width={137}
						height={26}
					/>
				)
			case 'light dark':
				return (
					<Image
						src='/static/logo.png'
						darkSrc='/static/logo-dark.png'
						width={137}
						height={26}
					/>
				)
		}
	}

	switch (lang) {
		case 'ru':
			return (
				<React.Fragment>
					<Section className={cn(`bg-${variant !== 'dark' ? 'white' : 'gray-200'} mobile-px-5 dark-bg-gray-200 p-8`, className)}>
						<Row>
							<Column
								parentWidth={536}
								width={180}
							>
								<Text className={` text-${variant !== 'dark' ? 'black' : 'white'} dark-text-white text-base`}>Мы в социальных сетях:</Text>
							</Column>
							<Column
								width={356}
								className='float-left'
							>
								<Spacer
									size={16}
									className='mobile-block hidden'
								/>
								<Social
									variant={variant}
									size={20}
									gap={12}
								></Social>
							</Column>
						</Row>
						<Spacer size={20} />
						<Link href='https://www.kaspersky.ru'>{renderLogo()}</Link>
					</Section>
					<Section className='mobile-px-5 px-8 py-5'>
						<Text className='text-center text-xs text-gray-600'>&copy; АО «Лаборатория Касперского», {new Date().getFullYear()}.</Text>
						<Spacer size={12} />
						<Text
							data-mindbox
							className='text-center text-xs text-gray-600'
						>
							Если Вы хотите отказаться от получения писем, нажмите <Link href={Mindbox.UNSUBSCRIBE}>здесь</Link>. Не отвечайте на это письмо, оно рассылается автоматически. Чтобы ознакомиться с
							политикой конфиденциальности, нажмите <Link href='https://www.kaspersky.ru/web-privacy-policy'>здесь</Link>.
						</Text>
					</Section>
				</React.Fragment>
			)
		default:
			return (
				<React.Fragment>
					<Section className={`bg-${variant !== 'dark' ? 'white' : 'gray-200'} mobile-px-5 dark-bg-gray-200 p-8`}>
						<Row>
							<Column
								parentWidth={536}
								width={136}
							>
								<Text className={` text-${variant !== 'dark' ? 'black' : 'white'} dark-text-white text-base`}>Follow Kaspersky:</Text>
							</Column>
							<Column width={400}>
								<Spacer
									size={16}
									className='mobile-block hidden'
								/>
								<Social
									variant={variant}
									size={20}
									gap={12}
									className='float-left'
								/>
							</Column>
						</Row>
						<Spacer size={20} />
						<Link href='https://www.kaspersky.com'>{renderLogo()}</Link>
					</Section>
					<Copyright />
				</React.Fragment>
			)
	}
}
