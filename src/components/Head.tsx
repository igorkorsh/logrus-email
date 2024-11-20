import * as React from 'react'
import { Conditional } from './Conditional'
import { ColorSchemeContext } from './Provider'
import { getStyles } from '../utils/get-styles'
import type { BaseProps, EmailComponent } from '../types'

export interface HeadProps extends BaseProps<'head'> {
	title: string
}

export const Head: EmailComponent<HeadProps> = ({ children, title }) => {
	const colorScheme = React.useContext(ColorSchemeContext)

	return (
		<head>
			<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			<meta name='viewport' content='width=device-width' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='x-apple-disable-message-reformatting' />
			<meta name='format-detection' content='telephone=no,address=no,email=no,date=no,url=no' />
			<meta name='color-scheme' content={colorScheme} />
			<meta name='supported-color-schemes' content={colorScheme} />
			<title>{title}</title>
			<Conditional
				target='gte mso 9'
				children='<xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>'
			/>
			<style>{`:root{color-scheme:${colorScheme};supported-color-schemes:${colorScheme}}`}</style>
			<style dangerouslySetInnerHTML={{ __html: getStyles('reset.css') }}></style>
			<style dangerouslySetInnerHTML={{ __html: getStyles('mobile.css') }}></style>
			{colorScheme !== 'light' && (
				<style dangerouslySetInnerHTML={{ __html: getStyles('dark.css') }}></style>
			)}
			{children}
		</head>
	)
}
