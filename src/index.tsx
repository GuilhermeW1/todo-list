import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './services/firebase'
import {ErrorBoundary} from 'react-error-boundary'
import Providers from './context'
import GlobalStyles from './styles/global-styles'

function ErrorFallback({error}: {error: Error}) {
  return (
    <div role="alert" style={{color: 'red'}}>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Providers>
        <GlobalStyles />
        <App />
      </Providers>
    </ErrorBoundary>
  </React.StrictMode>,
)
