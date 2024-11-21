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
	Social,
	Footer,
	Footer_v2
} from '../src/components'

export default function () {
	return (
		<Provider options={{ lang: 'en', colorScheme: 'light dark' }}>
			<Html>
				<Head title='' />
				<Body color='#f4f7fa' darkClass='dark-bg-gray-100'>
					<Preview text='' />
					<Container>
						<Webview />
						<Footer />
						<Footer_v2 />
					</Container>
				</Body>
			</Html>
		</Provider>
	)
}
