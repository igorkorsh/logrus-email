import * as React from 'react'
import { Link } from './Link'
import { Image } from './Image'

export interface HeroProps {
	href?: string
	src: string
	width: number
	height: number
}

export const Hero = ({ href = '#', src, width, height }: HeroProps) => (
	<Link href={href}>
		<Image src={src} width={width} height={height} className={`w-full max-w-[${width}px] h-auto`} />
	</Link>
)
