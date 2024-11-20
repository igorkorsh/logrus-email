import * as React from 'react'

export type ColorSchemeList = 'light' | 'dark' | 'light dark'

export interface ProviderProps {
	children: React.ReactNode
	options: {
		lang: string
		colorScheme: ColorSchemeList
	}
}

export const ColorSchemeContext = React.createContext<ColorSchemeList>('light dark')
export const LangContext = React.createContext<string>('en')

export const Provider = ({ children, options }: ProviderProps) => (
	<ColorSchemeContext.Provider value={options.colorScheme}>
		<LangContext.Provider value={options.lang}>{children}</LangContext.Provider>
	</ColorSchemeContext.Provider>
)
