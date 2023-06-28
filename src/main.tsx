import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { FluentProvider, teamsLightTheme, webDarkTheme } from '@fluentui/react-components'

ReactDOM.render(
    <React.StrictMode>
        <FluentProvider theme={teamsLightTheme} >
                <App />
        </FluentProvider>
            
    </React.StrictMode>
    , document.getElementById('root') as HTMLElement)

