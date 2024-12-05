import * as React from 'react'
import { LangContext, Section, Spacer, Text, Link, Row, Column } from '.'
import { Mindbox } from '../types'

export const Copyright = () => {
	const lang = React.useContext(LangContext)

	// const links = [
	// 	{ label: 'Privacy policy', href: 'https://www.kaspersky.com/web-privacy-policy' },
	// 	{ label: 'Contact us', href: '#' },
	// 	{ label: 'Send us a suspected virus', href: '#' },
	// 	{ label: 'Find out more', href: '#' },
	// 	{ label: 'Please forward this email to a friend', href: '#' },
	// 	{ label: 'Unsubscribe', href: Mindbox.UNSUBSCRIBE }
	// ]

	switch (lang) {
		case 'ru':
			return (
				<Section className='px-8 py-5 mobile-px-5'>
					<Text className='text-xs text-gray-600 text-center'>
						&copy; АО «Лаборатория Касперского», {new Date().getFullYear()}.
					</Text>
					<Spacer size={12} />
					<Text className='text-xs text-gray-600 text-center'>
						Если Вы хотите отказаться от получения писем, нажмите&nbsp;
						<Link href={Mindbox.UNSUBSCRIBE}>здесь</Link>. Не отвечайте на это письмо, оно
						рассылается автоматически. Чтобы ознакомиться с политикой конфиденциальности,
						нажмите&nbsp;<Link href='https://www.kaspersky.ru/web-privacy-policy'>здесь</Link>.
					</Text>
				</Section>
			)
		default:
			return (
				<Row className='px-8 py-5 mobile-px-5'>
					<Column parentWidth={536} width={260}>
						<Text className='text-xs text-gray-600'>Some useful information</Text>
						<Spacer size={12} />
						<Text className='text-xs text-gray-600'>
							Customer Support: <br />
							<Link href='https://support.kaspersky.com'>https://support.kaspersky.com</Link>
						</Text>
						<Spacer size={12} />
						<Text className='text-xs text-gray-600'>
							Kaspersky Lab UK Ltd., 1st Floor, 2 Kingdom Street, <br />
							Paddington, W2 6BD, United Kingdom. <br />
							<Link href='https://www.kaspersky.com'>www.kaspersky.com</Link>
						</Text>
						<Spacer size={12} />
						<Text className='text-xs text-gray-600'>
							&copy; {new Date().getFullYear()} AO Kaspersky Lab. All Rights Reserved.
						</Text>
					</Column>
					<Column width={16}></Column>
					<Column width={260}>
						<Text className='text-xs text-gray-600'>
							To make sure your Kaspersky emails get to your inbox, please add&nbsp;
							<Link href='mailto:no-reply@kaspersky.com'>no‑reply@Kaspersky.com</Link> to your
							address book or safe list.
						</Text>
						<Text className='text-xs text-gray-600'>
							To change your contact details for future communications, please&nbsp;
							<Link>click here</Link>.
						</Text>
						<Text className='text-xs text-gray-600'>
							This e-mail has been sent to <Link>name@name.com</Link>. You have received this email
							because you have purchased from&nbsp;
							<Link href='https://www.kaspersky.com'>Kaspersky.com</Link>.
						</Text>
						<Text className='text-xs text-gray-600'>
							If you do not want to receive this email again, please&nbsp;
							<Link href={Mindbox.UNSUBSCRIBE}>click here</Link>.
						</Text>
						{/* <Spacer size={12} />
						<Text className='text-xs text-gray-600'>
							{links.map(({ label, href }, index) => (
								<React.Fragment key={index}>
									<Link href={href}>{label}</Link>
									{index + 1 < links.length && ' | '}
									{(index + 1) % 2 === 0 && <br />}
								</React.Fragment>
							))}
						</Text> */}
					</Column>
				</Row>
			)
	}
}
