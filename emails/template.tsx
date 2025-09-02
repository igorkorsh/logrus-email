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
	LearnMore,
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
						<Section>
							<LearnMore />
						</Section>
						<Footer variant='light dark' />
						<Footer_v2 variant='light dark' />
						<Footer_v3 variant='light dark' />
					</Container>
				</Body>
			</Html>
		</Provider>
	)
}
