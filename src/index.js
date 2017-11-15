import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
	<Provider store={store}>
	    <MultiThemeProvider>
	        <App />
	    </MultiThemeProvider>
	</Provider>
    , document.getElementById('root')
)

registerServiceWorker()