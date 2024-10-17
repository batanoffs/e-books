import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { ScrollToTopAction, GlobalSpinner } from './components/index'
import { HelmetProvider } from 'react-helmet-async'

import App from './App'
import './styles/index.scss'

if (import.meta.env.PROD === true) disableReactDevTools()

const container = document.getElementById('root')

const root = createRoot(container!)
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<Router>
				<GlobalSpinner />
				<App />
				<ScrollToTopAction />
			</Router>
		</HelmetProvider>
	</React.StrictMode>
)
