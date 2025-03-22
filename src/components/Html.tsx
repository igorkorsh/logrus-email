import * as React from 'react'
import { LangContext } from './Provider'
import type { BaseProps, EmailComponent } from '../types'

interface HtmlProps extends BaseProps<'html'> {
	dir?: 'ltr' | 'rtl'
}

const attributes = {
	'xmlns': 'http://www.w3.org/1999/xhtml',
	'xmlns:v': 'urn:schemas-microsoft-com:vml',
	'xmlns:o': 'urn:schemas-microsoft-com:office:office'
}

export const Html: EmailComponent<HtmlProps> = ({ children, dir = 'ltr' }) => {
	const lang = React.useContext(LangContext)

	return (
		<html
			lang={lang}
			dir={dir}
			{...attributes}
		>
			{children}
		</html>
	)
}
