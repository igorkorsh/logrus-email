import * as React from 'react'
import {
	Provider,
	Html,
	Head,
	Body,
	Conditional,
	Preview,
	Table,
	Text,
	Link,
	List,
	Image,
	Button,
	Container,
	Section,
	Row,
	Column,
	Spacer,
	Hero,
	Webview,
	Social,
	Footer,
	Footer_v2
} from '../src/components'

export default function () {
	return (
		<Provider options={{ lang: 'en', colorScheme: 'light' }}>
			<Html>
				<Head title='Help us shape the future of crypto security' />
				<Body color='#f4f7fa' darkClass='dark-bg-gray-100'>
					<Preview text='' />
					<Container className='bg-white'>
						<Webview />
						<Section className='hidden mobile-block'>
							<Hero href='#' src='/static/test2-hero-mobile.png' width={600} height={300}></Hero>
						</Section>

						<Row className='mobile-column-center'>
							<Column
								parentWidth={600}
								width={298}
								className='pt-[32px] pl-[32px] mobile-px-5 mobile-py-0'
							>
								<Section className='mobile-hidden'>
									<Image srcset='/static/logo.svg' width={168} height={32} />
								</Section>
								<Spacer size={40} className='mobile-height-24'></Spacer>
								<Table className='mobile-table-175'>
									<tr>
										<td className='w-[24px] h-[24px] pr-[16px]'>
											<Section className='w-[24px] h-[24px] bg-lime-600 rounded-full'></Section>
										</td>
										<td>
											<Text className='text-[14px] font-bold leading-[16px] uppercase tracking-[2.24px] inline-block align-center'>
												Quick survey
											</Text>
										</td>
									</tr>
								</Table>
								<Spacer size={40} className='mobile-height-24'></Spacer>
								<Text className='text-[36px] font-bold leading-[36px]  mobile-column-center'>
									Help us shape the future of crypto security
								</Text>
							</Column>
							<Column width={10}></Column>
							<Column width={292} className='mobile-hidden'>
								<Hero href='#' src='/static/test2-hero-desktop.png' width={600} height={300}></Hero>
							</Column>
						</Row>
						<Spacer size={24} className='mobile-height-16'></Spacer>
						<Text className='text-[18px] font-normal leading-[21px] pl-[32px] mobile-px-5 mobile-text-center'>
							Tell us about your experience with cryptocurrency and what do you think about
							transaction security. The survey will take 5 minutes. Your feedback is invaluable!
						</Text>
						<Spacer size={40} className='mobile-height-24'></Spacer>
						<Button width={197} className='text-left'>
							Make an Impact
						</Button>
						<Spacer size={48} className='mobile-height-40'></Spacer>

						<Footer variant='light' />
					</Container>
				</Body>
			</Html>
		</Provider>
	)
}
