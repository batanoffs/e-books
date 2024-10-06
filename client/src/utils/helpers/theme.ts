import { PaletteMode } from '@mui/material'

export const themeOptions = (mode: PaletteMode) => ({
	palette: {
		mode,
		primary: {
			main: mode === 'light' ? '#228be6' : '#176ab3',
			contrastText: '#fff',
		},
		secondary: {
			main: mode === 'light' ? '#aa49e7' : '#4b2990',
			contrastText: '#fff',
		},
		background: {
			default: mode === 'light' ? '#fff' : '#1a2027',
			paper: mode === 'light' ? '#f4f6f8' : '#2d3748',
		},
		text: {
			primary: mode === 'light' ? '#071108' : '#fff',
			secondary: mode === 'light' ? '#bfb1c1' : '#fff',
			disabled: mode === 'light' ? '#5c5959' : '#fff',
		},
		error: {
			main: '#d32f2f',
		},
		warning: {
			main: '#ed6c02',
		},
		info: {
			main: '#0288d1',
		},
		success: {
			main: '#2e7d32',
		},
		divider: '#bfb1c1',
	},
	typography: {
		fontFamily: 'Montserrat Alternates, sans-serif',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,

		h1: {
			fontSize: '2.8em',
			fontWeight: 700,
			letterSpacing: '-0.01562em',
		},
		h2: {
			fontSize: '2.2em',
			fontWeight: 600,
			letterSpacing: '-0.00833em',
		},
		h3: {
			fontSize: '1.8em',
			fontWeight: 500,
			letterSpacing: '0em',
		},
		h4: {
			fontSize: '1.6em',
			fontWeight: 500,
			letterSpacing: '0em',
		},
		h5: {
			fontSize: '1.2em',
			fontWeight: 500,
			letterSpacing: '0em',
		},
		h6: {
			fontSize: '1em',
			fontWeight: 500,
			letterSpacing: '0em',
		},
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: 1.5,
		},
		body2: {
			fontSize: '0.875rem',
			fontWeight: 400,
			lineHeight: 1.43,
		},
		button: {
			textTransform: 'none', // Ensure no capitalization in buttons
			fontWeight: 500,
		},
		caption: {
			fontSize: '0.75rem',
			fontWeight: 400,
			lineHeight: 1.66,
			color: '#6028c8',
		},
		allVariants: {
			textTransform: 'none',
			fontSize: 16,
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	components: {
		MuiTextField: {
			defaultProps: {
				variant: 'standard' as const,
			},
		},
		MuiFormControl: {
			defaultProps: {
				variant: 'outlined' as const,
			},
		},
		MuiList: {
			defaultProps: {
				dense: true,
			},
		},
		MuiTable: {
			defaultProps: {
				size: 'small',
			},
		},
		MuiSelect: {
			defaultProps: {
				variant: 'standard' as const,
			},
		},
		MuiAppBar: {
			styleOverrides: {
				colorInherit: {
					backgroundColor: '#ffffff',
					color: '#333333',
				},
			},
			defaultProps: {
				color: 'inherit' as const,
			},
		},
		MuiContainer: {
			variants: [
				{
					props: { maxWidth: false }, // Set to false to disable maxWidth
					style: {
						padding: 0,
						margin: 0,
					},
				},
			],
			styleOverrides: {
				root: {
					'@media (min-width: 600px)': {
						paddingLeft: 0,
						paddingRight: 0,
					},
					'@media (min-width: 1536px)': {
						maxWidth: '100%', // Use a valid value
					},
				},
			},
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					'@media (min-width: 600px)': {
						paddingLeft: 'min(10em, 10vw)',
						paddingRight: 'min(10em, 10vw)',
					},
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true, // Removes the shadow for buttons
			},
			styleOverrides: {
				root: {
					borderRadius: 8, // Slightly more rounded buttons
					height: 36,
				},
				containedPrimary: {
					color: '#ffffff',
				},
				containedSecondary: {
					color: '#ffffff',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none', // Remove box shadow by default
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					borderRadius: 6,
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 16,
					boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for cards
				},
			},
		},
		MuiLink: {
			defaultProps: {
				underline: 'hover', // or 'hover', 'always', etc.
			},
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for accordions
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					color: '#6028c8',
				},
			},
		},
	},
	shape: {
		borderRadius: 6, // Retain rounded corners
	},
})
