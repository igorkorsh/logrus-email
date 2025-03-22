import * as React from 'react'
import { Mindbox } from '../types'
import { Section } from './Section'
import { Spacer } from './Spacer'
import { Text } from './Text'
import { Link } from './Link'
import { LangContext } from './Provider'
import { Column } from './Column'
import { Row } from './Row'

export const Copyright = () => {
	const lang = React.useContext(LangContext)

	switch (lang) {
		case 'ru':
			return (
				<Section className='mobile-px-5 px-8 py-5'>
					<Text className='text-center text-xs text-gray-600'>
						&copy; АО «Лаборатория Касперского», {new Date().getFullYear()}.
					</Text>
					<Spacer size={12} />
					<Text className='text-center text-xs text-gray-600'>
						Если Вы хотите отказаться от получения писем, нажмите&nbsp;
						<Link href={Mindbox.UNSUBSCRIBE}>здесь</Link>. Не отвечайте на это
						письмо, оно рассылается автоматически. Чтобы ознакомиться с
						политикой конфиденциальности, нажмите&nbsp;
						<Link href='https://www.kaspersky.ru/web-privacy-policy'>
							здесь
						</Link>
						.
					</Text>
				</Section>
			)
		default:
			return (
				<Row className='mobile-px-5 px-8 py-5'>
					<Column
						parentWidth={536}
						width={260}
					>
						<Text className='text-xs text-gray-600'>
							Some useful information
						</Text>
						<Spacer size={12} />
						<Text className='text-xs text-gray-600'>
							Customer Support: <br />
							<Link href='https://support.kaspersky.com'>
								https://support.kaspersky.com
							</Link>
						</Text>
						<Spacer size={12} />
						<Text className='text-xs text-gray-600'>
							Kaspersky Lab UK Ltd., 1st Floor, 2 Kingdom Street, <br />
							Paddington, W2 6BD, United Kingdom. <br />
							<Link href='https://www.kaspersky.com'>www.kaspersky.com</Link>
						</Text>
						<Spacer size={12} />
						<Text className='text-xs text-gray-600'>
							&copy; {new Date().getFullYear()} AO Kaspersky Lab. All Rights
							Reserved.
						</Text>
					</Column>
					<Column width={16}></Column>
					<Column width={260}>
						<Text className='text-xs text-gray-600'>
							To make sure your Kaspersky emails get to your inbox, please
							add&nbsp;
							<Link href='mailto:no-reply@kaspersky.com'>
								no‑reply@Kaspersky.com
							</Link>{' '}
							to your address book or safe list.
						</Text>
						<Text className='text-xs text-gray-600'>
							To change your contact details for future communications,
							please&nbsp;
							<Link>click here</Link>.
						</Text>
						<Text className='text-xs text-gray-600'>
							This e-mail has been sent to <Link>name@name.com</Link>. You have
							received this email because you have purchased from&nbsp;
							<Link href='https://www.kaspersky.com'>Kaspersky.com</Link>.
						</Text>
						<Text className='text-xs text-gray-600'>
							If you do not want to receive this email again, please&nbsp;
							<Link href={Mindbox.UNSUBSCRIBE}>click here</Link>.
						</Text>
					</Column>
				</Row>
			)
	}
}
