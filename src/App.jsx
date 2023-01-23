import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import Header from './components/Header';
import ProductListPage from './components/ProductListPage';
import ProductsDetailsPage from './components/ProductsDetailsPage';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/home" element={<ProductListPage />} handle={{
              crumb: () => <Link to="/message">Home</Link>
            }}
            />
            <Route exact path="/home/:id" element={<ProductsDetailsPage />} handle={{
              crumb: () => <Link to="/home/:id">Product</Link>
            }} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  )
}

export default App;
