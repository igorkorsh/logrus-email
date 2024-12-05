import clsx from 'clsx'
import * as React from 'react'
import { Link } from './Link'
import { Image } from './Image'

export interface HeroProps {
	href?: string
	src: string
	width?: number
	height: number
	className?: string
}

export const Hero = ({ href = '#', src, width = 600, height, className }: HeroProps) => (
	<Link href={href}>
		<Image
			srcset={src}
			width={width}
			height={height}
			className={clsx(`w-full max-w-[${width}px] h-auto`, className)}
		/>
	</Link>
)
