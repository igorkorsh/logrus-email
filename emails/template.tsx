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
	AnchorTarget,
	Link,
	List,
	Image,
	ImageDevice,
	Button,
	Container,
	Section,
	Row,
	Column,
	Spacer,
	Webview,
	Social,
	Footer,
	Footer_v2,
	Footer_v3
} from '../src/components'

export default function () {
	return (
		<Provider options={{ lang: 'en', colorScheme: 'light' }}>
			<Html>
				<Head title='' />
				<Body color='#f4f7fa'>
					<Preview text='' />
					<Container>
						<Webview />
						<Footer variant='light' />
						<Footer_v2 variant='light' />
						<Footer_v3 variant='light' />
					</Container>
				</Body>
			</Html>
		</Provider>
	)
}
