import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'

ReactDOM.render(
	<Provider store={store}>
	    <MultiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
	        <App />
	    </MultiThemeProvider>
	</Provider>
    , document.getElementById('root')
)

registerServiceWorker()