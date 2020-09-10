import { HashRouter, Route } from 'react-router-dom'

import AnimatedSwitch from 'AnimatedSwitch'
import CategoryPage from './scenes/CategoryPage'
import GlobalStyles from './style'
import Logo from 'Logo'
import MainPage from './scenes/MainPage'
import MenuPage from './scenes/MenuPage'
import Provider from 'Provider'
import { ResetApp } from './hooks/ResetApp'
import { ThemeProvider } from 'styled-components'
import { hot } from 'react-hot-loader/root'
import { theme } from 'config'

let App = () => {
	return pug`
		HashRouter
			ResetApp
			GlobalStyles
			ThemeProvider(theme=theme)
				Logo
				Provider
					AnimatedSwitch
						Route(
							exact
							path='/'
							component=MainPage
						)
						Route(
							exact
							path='/menu'
							component=MenuPage
						)
						Route(
							path='/category/:type'
							component=CategoryPage
						)
	`
}

if (module.hot) {
	App = hot(App)
}

export default App