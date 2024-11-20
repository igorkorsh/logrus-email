import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import CleanCSS from 'clean-css'

export function getStyles(filename: string): string {
	const path = resolve(__dirname, '../src/styles/' + filename)
	const data = readFileSync(path, 'utf-8')
	const minified = new CleanCSS().minify(data)

	return minified.styles
}
