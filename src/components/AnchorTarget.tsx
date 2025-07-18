import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'

interface AnchorTargetProps extends BaseProps<'p'> {}

export const AnchorTarget: EmailComponent<AnchorTargetProps> = ({ children }) => {
	return <h1 className='m-0 size-0 text-[0px] leading-none'>{children}</h1>
}
