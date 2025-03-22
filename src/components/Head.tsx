import * as React from 'react'
import { Conditional } from './Conditional'
import { ColorSchemeContext } from './Provider'
import { getStyles } from '../utils/get-styles'
import type { BaseProps, EmailComponent } from '../types'

interface HeadProps extends BaseProps<'head'> {
	title: string
}

export const Head: EmailComponent<HeadProps> = ({ children, title }) => {
	const colorScheme = React.useContext(ColorSchemeContext)

	const meta = [
		{ name: 'viewport', content: 'width=device-width' },
		{ name: 'x-apple-disable-message-reformatting' },
		{
			name: 'format-detection',
			content: 'telephone=no,address=no,email=no,date=no,url=no'
		},
		{ name: 'color-scheme', content: colorScheme },
		{ name: 'supported-color-schemes', content: colorScheme }
	]

	return (
		<head>
			<meta
				httpEquiv='Content-Type'
				content='text/html; charset=utf-8'
			/>
			<meta
				httpEquiv='X-UA-Compatible'
				content='IE=edge'
			/>
			{meta.map(({ name, content }) => (
				<meta
					key={name}
					name={name}
					content={content}
				/>
			))}
			<title>{title}</title>
			<Conditional
				target='gte mso 9'
				children='<xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>'
			/>
			<style>{`:root{color-scheme:${colorScheme};supported-color-schemes:${colorScheme}}`}</style>
			<style dangerouslySetInnerHTML={{ __html: getStyles('reset.css') }} />
			<style dangerouslySetInnerHTML={{ __html: getStyles('mobile.css') }} />
			{colorScheme !== 'light' && (
				<style dangerouslySetInnerHTML={{ __html: getStyles('dark.css') }} />
			)}
			{children}
		</head>
	)
}
