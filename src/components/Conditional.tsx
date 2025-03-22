import * as React from 'react'

interface ConditionalProps {
	children: React.ReactNode
	target?: string
}

export const Conditional = ({ children, target = 'mso' }: ConditionalProps) => {
	let result: string

	switch (target) {
		case '!mso':
			result = `<!--[if !mso]><!-->${children}<!--<![endif]-->`
		default:
			result = `<!--[if ${target}]>${children}<![endif]-->`
	}

	return <span dangerouslySetInnerHTML={{ __html: result }}></span>
}
