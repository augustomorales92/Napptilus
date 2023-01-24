import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary
} from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { router } from './routes';
import ErrorFallback from './components/errorFallback/ErrorFallback';

const queryClient = new QueryClient()


const App = () => {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ErrorBoundary
          onReset={reset}
          fallbackRender={ErrorFallback}
        >
          <RouterProvider router={router} />
        </ErrorBoundary>

      </div>
    </QueryClientProvider>
  )
}

export default App;
