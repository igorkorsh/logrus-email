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
		<Provider options={{ lang: 'ru', colorScheme: 'light' }}>
			<Html>
				<Head title='Dear Partner' />
				<Body color='#f4f7fa' darkClass='dark-bg-gray-100 mobile-column'>
					<Preview text='' />
					<Container className='bg-white'>
						<Webview />
						<Section className='p-[32px] mobile-px-5 mobile-p-tb-16'>
							<Image srcset='/static/logo.svg' width={168} height={32} />
						</Section>
						<Hero href='#' src='/static/test-hero.png' width={600} height={300}></Hero>
						<Section className='p-[32px] mobile-px-5 mobile-py-5'>
							<Text className='text-base font-normal leading-[18px]'>
								The Kaspersky team is thrilled to welcome you to the B2C partner program.
							</Text>
							<Spacer size={16}></Spacer>
							<Text className='text-base font-normal leading-[18px]'>
								You can find information about our products, partner benefits, and tools available
								to you by visiting the{' '}
								<span className='text-green-600 font-bold underline'>
									Kaspersky United Partner Portal
								</span>
								.
							</Text>
						</Section>
						<Row align='center' className='p-[32px] mobile-px-5 mobile-pt-0'>
							<Column parentWidth={536} width={262} className='mobile-column-center'>
								<Image
									srcset='/static/test-partner.png'
									width={262}
									height={312}
									className='mobile-column-center'
								/>
							</Column>
							<Column width={32} className='h-8'></Column>
							<Column width={242} className='h-[312px] mobile-height-auto'>
								<Text className='text-base font-normal leading-[18px] mobile-column-center inline-block align-center'>
									To learn more about the partner program and how the portal works, we recommend you
									complete the partner onboarding course, which can be found on the portal’s main
									page.
								</Text>
							</Column>
						</Row>
						<Section className='p-[32px] mobile-px-5 mobile-py-0'>
							<Text className='text-base font-normal leading-[18px] mobile-text-center'>
								The Kaspersky United Partner Portal offers lots of useful tools and information, and
								we particularly encourage you to explore the following:s
							</Text>
							<Spacer size={24}></Spacer>

							<Row className='bg-gray-900 p-[16px]'>
								<Column parentWidth={504} width={64}>
									<Image srcset='/static/test-explore-icon1.svg' width={64} height={64}></Image>
								</Column>
								<Column width={16} className='h-2'></Column>
								<Column width={424}>
									<Section>
										<Link href='https://partners.kaspersky.com/login/'>
											<Text className='text-base font-[700] leading-[20px] text-green-600'>
												Info on Kaspersky’s B2C products
											</Text>
										</Link>
										<Spacer size={8}></Spacer>
										<Text className='text-[12px] font-normal leading-[14px]'>
											View the latest details on our products and features for various platforms –
											so you’re always up-to-date.
										</Text>
									</Section>
								</Column>
							</Row>
							<Spacer size={16}></Spacer>
							<Row className='bg-gray-900 p-[16px]'>
								<Column parentWidth={504} width={64}>
									<Image srcset='/static/test-explore-icon2.svg' width={64} height={64}></Image>
								</Column>
								<Column width={16} className='h-2'></Column>
								<Column width={424}>
									<Section>
										<Link
											href='https://partners.kaspersky.com/login/'
											className='text-base font-[700] leading-[20px] text-green-600'
										>
											<Text className='text-base font-[700] leading-[20px] text-green-600'>
												Training course for B2C product sellers
											</Text>
										</Link>
										<Spacer size={8}></Spacer>
										<Text className='text-[12px] font-normal leading-[14px]'>
											Complete and pass the test to receive a certificate.
										</Text>
									</Section>
								</Column>
							</Row>
							<Spacer size={16}></Spacer>
							<Row className='bg-gray-900 p-[16px]'>
								<Column parentWidth={504} width={64}>
									<Image srcset='/static/test-explore-icon3.svg' width={64} height={64}></Image>
								</Column>
								<Column width={16} className='h-2'></Column>
								<Column width={424}>
									<Section>
										<Link href='https://partners.kaspersky.com/login/'>
											<Text className='text-base font-[700] leading-[20px] text-green-600'>
												Kaspersky logo and branding downloads
											</Text>
										</Link>
										<Spacer size={8}></Spacer>
										<Text className='text-[12px] font-normal leading-[14px]'>
											Easily get the relevant logo and branding elements to match your status in the
											program.
										</Text>
									</Section>
								</Column>
							</Row>
						</Section>
						<Row>
							<Column parentWidth={600} width={294}>
								<Section className='pt-[32px] pr-0 pb-[32px] pl-[32px]'>
									<Text className='text-base font-normal leading-[18px]'>
										Please make sure you take full advantage of the benefits that come with being a
										Kaspersky partner!
									</Text>
									<Spacer size={16}></Spacer>
									<Text className='text-base font-normal leading-[18px]'>
										Best regards, Kaspersky
									</Text>
								</Section>
							</Column>
							<Column width={6}></Column>
							<Column width={300} className='mobile-p-left'>
								<Image
									srcset='/static/test-certification.png'
									width={270}
									height={174}
									className='pl-[6px]'
								/>
							</Column>
						</Row>
						<Section className='p-[32px] mobile-px-5 mobile-py-5'>
							<Section className='p-[32px] bg-gray-900'>
								<Text className='text-[24px] font-bold leading-[27px]'>Kaspersky key contacts</Text>
								<Spacer size={32}></Spacer>
								<Text className='text-[18px] font-bold leading-[21px]'>
									Partner Program support
								</Text>
								<Spacer size={16}></Spacer>
								<Text className='text-[14px] font-normal leading-[18px] text-green-600 underline'>
									B2CPartnerProgram@kaspersky.com
								</Text>
								<Spacer size={32}></Spacer>
								<Text className='text-[18px] font-bold leading-[21px]'>B2C Distributors</Text>
								<Spacer size={16}></Spacer>
								<Text className='text-[14px] font-bold leading-[18px] text-gray-500'>
									ACA Pacific Technology (Singapore) Pte. Ltd.
								</Text>
								<Text className='text-[14px] font-normal leading-[18px] text-gray-500'>
									20 Upper Circular Road, #03-01/05, The Riverwalk
								</Text>
								<Spacer size={16}></Spacer>
								<Text className='text-[14px] font-bold leading-[18px] text-gray-500'>
									XTechnologies PTE LTD
								</Text>
								<Text className='text-[14px] font-normal leading-[18px] text-gray-500'>
									60 Paya Lebar Rd #13-01, Paya Lebar Square
								</Text>
								<Spacer size={32}></Spacer>
								<Text className='text-[18px] font-bold leading-[18px]'>B2C Sales manager</Text>
								<Spacer size={16}></Spacer>
								<Text className='text-[14px] font-normal leading-[18px] text-gray-500'>
									Singapore
								</Text>
								<Text className='text-[14px] font-normal leading-[18px] text-gray-500'>
									Yi Lin Ong{' '}
									<span className='text-green-600 underline'>yilin.ong@kaspersky.com</span>
								</Text>
								<Text className='text-[14px] font-normal leading-[18px] text-gray-500'>
									Marife Morales{' '}
									<span className='text-green-600 underline'>Marife.morales_ext@kaspersky.com</span>
								</Text>
							</Section>
						</Section>
						<Footer variant='light' />
					</Container>
				</Body>
			</Html>
		</Provider>
	)
}
