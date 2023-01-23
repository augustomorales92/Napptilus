import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { router } from './routes/routes';
const queryClient = new QueryClient()


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  )
}

export default App;
