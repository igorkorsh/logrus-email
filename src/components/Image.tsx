import * as React from "react";
import type { BaseProps, EmailComponent } from "../types";
import { cn } from "../utils/classnames";

interface ImageProps extends BaseProps<"img"> {
	src: string;
	darkSrc?: string;
	stretch?: boolean;
	classNames?: Partial<Record<"light" | "dark", string>>;
}

export const Image: EmailComponent<ImageProps> = ({
	src,
	darkSrc,
	width,
	height,
	stretch = false,
	classNames,
	...props
}) => {
	return (
		<>
			<img
				{...props}
				src={src}
				width={width}
				height={height}
				className={cn(
					"border-none align-top",
					`max-w-[${width}px]`,
					stretch && "h-auto w-full max-w-[600px]",
					darkSrc && "dark-hidden",
					classNames?.light,
				)}
			/>
			{darkSrc && (
				<>
					<span dangerouslySetInnerHTML={{ __html: "<!--[if !mso]><!-->" }} />
					<img
						{...props}
						src={darkSrc}
						width={width}
						height={height}
						className={cn(
							"dark-block hidden border-none",
							`max-w-[${width}px]`,
							stretch && "h-auto w-full max-w-[600px]",
							classNames?.dark,
						)}
					/>
					<span dangerouslySetInnerHTML={{ __html: "<!--<![endif]-->" }} />
				</>
			)}
		</>
	);
};
