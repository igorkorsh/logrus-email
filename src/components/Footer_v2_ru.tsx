import * as React from 'react'
import { Section, Row, Column, Spacer, Text, Link, Image, Social, FooterProps } from '.'
import { Mindbox } from '../types'

export const Footer_v2_ru = ({ variant = 'light' }: FooterProps) => {
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
					variant !== 'dark' ? 'white' : 'gray-200'
				} px-[32px] py-[30px] mobile-px-5 dark-bg-gray-200`}
			>
				<Row>
					<Column parentWidth={536} width={180}>
						<Text
							className={` text-${
								variant !== 'dark' ? 'black' : 'white'
							} text-[14px] leading-[20px] dark-text-white`}
						>
							Мы в социальных сетях:
						</Text>
					</Column>
					<Column width={356} className='float-left'>
						<Spacer size={16} className='hidden mobile-block' />
						<Social variant={variant} size={20} gap={12}></Social>
					</Column>
				</Row>
				<Spacer size={20} />
				<Link href='https://www.kaspersky.ru'>
					<Image srcset={getLogo()} width={137} height={26} />
				</Link>
			</Section>
			<Section className='px-[32px] py-[20px] mobile-px-5'>
				<Text className='text-[10px] leading-[12px] text-gray-600 text-center'>
					&copy; АО «Лаборатория Касперского», {new Date().getFullYear()}.
				</Text>
				<Spacer size={12} />
				<Text className='text-[10px] leading-[12px] text-gray-600 text-center'>
					Если Вы хотите отказаться от получения писем, нажмите{' '}
					<Link href={Mindbox.UNSUBSCRIBE}>здесь</Link>. Не отвечайте на это письмо, оно рассылается
					автоматически. Чтобы ознакомиться с политикой конфиденциальности, нажмите{' '}
					<Link href='https://www.kaspersky.ru/web-privacy-policy'>здесь</Link>.
				</Text>
			</Section>
		</React.Fragment>
	)
}
