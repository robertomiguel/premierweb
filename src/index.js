import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <MultiThemeProvider>
        <App />
    </MultiThemeProvider>
    , document.getElementById('root')
)

registerServiceWorker()