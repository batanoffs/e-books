// #228be6, #6028c8, #071108, #bfb1c1, #faf3dd

import { createTheme } from '@mui/material/styles'

const themeOptions = createTheme({
	palette: {
		mode: 'light', // Add support for dark mode switching
		primary: {
			main: '#228be6', // Primary color
			light: '#4aa8f2', // Light variant for primary
			dark: '#176ab3', // Dark variant for primary
			contrastText: '#ffffff', // Contrast text for primary
		},
		secondary: {
			main: '#6f42c1',
			light: '#9b6ee5',
			dark: '#4b2990',
			contrastText: '#f4f6f8',
		},
		text: {
			primary: '#071108', // Primary text color
			secondary: '#bfb1c1', // Secondary text color
			disabled: '#5c5959', // Disabled text color
			hint: '#6028c8', // Hint color
		},
		background: {
			default: '#fff', // Slightly off-white background for better readability
			paper: '#f4f6f8',
		},
		error: {
			main: '#d32f2f', // Error color
		},
		warning: {
			main: '#ed6c02', // Warning color
		},
		info: {
			main: '#0288d1', // Info color
		},
		success: {
			main: '#2e7d32', // Success color
		},
		divider: '#bfb1c1', // Divider color for UI elements
	},
	typography: {
		fontFamily: 'Montserrat Alternates, sans-serif',
		h1: {
			fontSize: '2.5rem',
			fontWeight: 700,
			letterSpacing: '-0.01562em',
		},
		h2: {
			fontSize: '2rem',
			fontWeight: 600,
			letterSpacing: '-0.00833em',
		},
		h3: {
			fontSize: '1.75rem',
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
			fontWeight: 600,
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
	shape: {
		borderRadius: 12, // Retain rounded corners
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				colorInherit: {
					backgroundColor: '#ffffff',
					color: '#333333',
				},
			},
			defaultProps: {
				color: 'inherit',
			},
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true, // Removes the shadow for buttons
			},
			styleOverrides: {
				root: {
					borderRadius: 8, // Slightly more rounded buttons
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
					borderRadius: 8,
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
				underline: 'hover', // Links only underlined on hover
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
})

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches

export const theme = {
	themeOptions,
	isDarkMode,
}

export default themeOptions

// import { defaultTheme } from 'react-admin';

// Function to create light and dark mode themes
// export const myTheme = {
//     typography: {
//         fontFamily: ['Montserrat Alternates', 'Arial', 'sans-serif'].join(','),
//     },
//     components: {
//         ...defaultTheme.components,
//         MuiTextField: {
//             defaultProps: {
//                 variant: 'outlined' as const,
//             },
//         },
//         MuiFormControl: {
//             defaultProps: {
//                 variant: 'outlined' as const,
//             },
//         },
//         MuiList: {
//             defaultProps: {
//                 dense: true,
//             },
//         },
//         MuiTable: {
//             defaultProps: {
//                 size: 'small',
//             },
//         },
//     },
// };
