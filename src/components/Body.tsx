import * as React from 'react'
import { LangContext } from './Provider'
import { Tailwind } from '@react-email/tailwind'
import { Conditional } from './Conditional'
import type { BaseProps, EmailComponent } from '../types'
import config from '../../tailwind.config'

export interface BodyProps extends BaseProps<'body'> {
	color: string
	darkClass?: string
}

export const Body: EmailComponent<BodyProps> = ({ children, color, darkClass }) => {
	const lang = React.useContext(LangContext)

	return (
		<Tailwind config={config}>
			<body className={`w-full m-0 !p-0 mso-line-height-exactly bg-[${color}] ${darkClass}`}>
				<center role='article' lang={lang} className={`w-full bg-[${color}] ${darkClass}`}>
					<Conditional
						children={`<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: ${color}" class="${darkClass}"><tr><td>`}
					/>
					{children}
					<Conditional children='</td></tr></table>' />
				</center>
			</body>
		</Tailwind>
	)
}
