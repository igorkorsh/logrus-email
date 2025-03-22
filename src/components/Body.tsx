import * as React from 'react'
import { LangContext } from './Provider'
import { Tailwind } from '@react-email/tailwind'
import { Conditional } from './Conditional'
import type { BaseProps, EmailComponent } from '../types'
import config from '../../tailwind.config'
import { cn } from '../utils/classnames'

interface BodyProps extends BaseProps<'body'> {
	color: string
}

export const Body: EmailComponent<BodyProps> = ({
	children,
	color,
	className
}) => {
	const lang = React.useContext(LangContext)

	return (
		<Tailwind config={config}>
			<body
				className={cn(
					'body mso-line-height-exactly m-0 w-full !p-0',
					`bg-[${color}]`,
					className
				)}
			>
				<center
					role='article'
					lang={lang}
					className={cn('w-full', `bg-[${color}]`, className)}
				>
					<Conditional
						children={`<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: ${color}"><tr><td>`}
					/>
					{children}
					<Conditional children='</td></tr></table>' />
				</center>
			</body>
		</Tailwind>
	)
}
