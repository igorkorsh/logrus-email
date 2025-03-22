import * as React from 'react'
import type { BaseProps, EmailComponent } from '../types'
import { cn } from '../utils/classnames'

type Image = {
	src: string
	width?: number
	height?: number
}

interface ImageDeviceProps extends BaseProps<'img'> {
	mobile: Image
	desktop: Image
	stretch?: boolean
	classNames?: Partial<Record<'mobile' | 'desktop', string>>
}

export const ImageDevice: EmailComponent<ImageDeviceProps> = ({
	mobile,
	desktop,
	stretch = false,
	classNames
}) => {
	return (
		<>
			<img
				src={desktop.src}
				width={desktop.width}
				height={desktop.height}
				className={cn(
					'mobile-hidden border-none align-top',
					`max-w-[${desktop.width}px]`,
					stretch && 'h-auto w-full',
					classNames?.desktop
				)}
			/>
			<span dangerouslySetInnerHTML={{ __html: '<!--[if !mso]><!-->' }} />
			<img
				src={mobile.src}
				width={mobile.width}
				height={mobile.height}
				className={cn(
					'mobile-block hidden h-auto w-full max-w-[600px] border-none',
					classNames?.mobile
				)}
			/>
			<span dangerouslySetInnerHTML={{ __html: '<!--<![endif]-->' }} />
		</>
	)
}
