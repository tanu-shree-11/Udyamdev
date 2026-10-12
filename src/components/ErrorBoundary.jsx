import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      const isDev = import.meta.env?.DEV;
      return (
        <div className="my-6 rounded-2xl border border-violet-500/20 bg-violet-950/20 p-6 text-center text-white backdrop-blur-md">
          <p className="text-sm font-semibold text-violet-300">Section temporarily unavailable</p>
          {isDev && this.state.error && (
            <div className="mt-3 text-left bg-black/60 border border-red-500/40 rounded-xl p-3 text-xs text-red-300 font-mono overflow-auto max-h-48">
              <p className="font-bold text-red-400">{this.state.error.toString()}</p>
              {this.state.errorInfo?.componentStack && (
                <pre className="mt-2 text-[10px] text-neutral-400 whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>
          )}
          <p className="mt-1 text-xs text-neutral-400">The rest of the site is functioning normally.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
