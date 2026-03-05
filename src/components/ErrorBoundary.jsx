import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // You could log to a service here
    // console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="efb-root">
          <h2>Something went wrong.</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error)}</pre>
          <button onClick={() => window.location.assign('/')} className="efb-btn">Go Home</button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
