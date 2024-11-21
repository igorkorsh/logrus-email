import * as React from 'react'
import { Section, Row, Column, Spacer, Text, Link, Image, Social } from './'
import { Mindbox } from '../types'

export const Footer_v2 = () => {
	return (
		<React.Fragment>
			<Section className='bg-white px-[32px] py-[30px] mobile-px-5 dark-bg-gray-200'>
				<Row>
					<Column parentWidth={536} width={140}>
						<Text className='text-[14px] leading-[20px] text-black dark-text-white'>
							Follow Kaspersky:
						</Text>
					</Column>
					<Column width={396} className='float-left'>
						<Spacer size={16} className='hidden mobile-block' />
						<Social size={20} gap={12}></Social>
					</Column>
				</Row>
				<Spacer size={20} />
				<Link href='https://www.kaspersky.com'>
					<Image src='/static/logo.png' srcDark='/static/logo-dark.png' width={137} height={26} />
				</Link>
			</Section>
			<Row className='px-[32px] py-[20px] mobile-px-5'>
				<Column parentWidth={536} width={260}>
					<Text className='text-[10px] leading-[12px] text-gray-600'>Some useful information</Text>
					<Spacer size={12} />
					<Text className='text-[10px] leading-[12px] text-gray-600'>
						Customer Support: <br />
						<Link href='https://support.kaspersky.com'>https://support.kaspersky.com</Link>
					</Text>
					<Spacer size={12} />
					<Text className='text-[10px] leading-[12px] text-gray-600'>
						Kaspersky Lab UK Ltd., 1st Floor, 2 Kingdom Street, <br />
						Paddington, W2 6BD, United Kingdom. <br />
						<Link href='https://www.kaspersky.com'>www.kaspersky.com</Link>
					</Text>
					<Spacer size={12} />
					<Text className='text-[10px] leading-[12px] text-gray-600'>
						&copy; {new Date().getFullYear()} AO Kaspersky Lab. All Rights Reserved.
					</Text>
				</Column>
				<Column width={16}></Column>
				<Column width={260}>
					<Text className='text-[10px] leading-[12px] text-gray-600'>
						To make sure your Kaspersky emails get to your inbox, please add{' '}
						<Link href='mailto:no-reply@kaspersky.com'>no‑reply@Kaspersky.com</Link> to your address
						book or safe list.
					</Text>
					<Text className='text-[10px] leading-[12px] text-gray-600'>
						To change your contact details for future communications, please <Link>click here</Link>
						.
					</Text>
					<Text className='text-[10px] leading-[12px] text-gray-600'>
						This e-mail has been sent to <Link>name@name.com</Link>. You have received this email
						because you have purchased from{' '}
						<Link href='https://www.kaspersky.com'>Kaspersky.com</Link>.
					</Text>
					<Text className='text-[10px] leading-[12px] text-gray-600'>
						If you do not want to receive this email again, please{' '}
						<Link href={Mindbox.UNSUBSCRIBE}>click here</Link>.
					</Text>
					<Spacer size={12} />
					<Text className='text-[10px] leading-[12px] text-gray-600'>
						<Link href='https://www.kaspersky.com/web-privacy-policy'>Privacy policy</Link>
						{' | '}
						<Link>Contact us</Link>
						<br />
						<Link>Send us a suspected virus</Link>
						{' | '}
						<Link>Find out more</Link>
						<br />
						<Link>Please forward this email to a friend</Link>
						{' | '}
						<Link href={Mindbox.UNSUBSCRIBE}>Unsubscribe</Link>
					</Text>
				</Column>
			</Row>
		</React.Fragment>
	)
}
