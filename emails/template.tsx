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
	Image,
	Button,
	Container,
	Section,
	Row,
	Column,
	Spacer,
	Hero,
	Webview,
	Webview_v2,
	Social,
	Footer,
	Footer_v2,
	Footer_v2_ru
} from '../src/components'

export default function () {
	return (
		<Provider options={{ lang: 'ru', colorScheme: 'light' }}>
			<Html>
				<Head title='' />
				<Body color='#f4f7fa' darkClass='dark-bg-gray-100'>
					<Preview text='' />
					<Container>
						<Webview />
						<Footer variant='light' />
						<Footer_v2 variant='light' />
						<Footer_v2_ru variant='light' />
					</Container>
				</Body>
			</Html>
		</Provider>
	)
}
