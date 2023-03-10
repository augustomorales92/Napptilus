import React from 'react'
import {
  Route,
  Navigate,
  Link,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import ProductListPage from '../components/productListPage'
import ProductsDetailsPage from '../components/productsDetailsPage'
import RootLayout from '../layouts/RootLayout'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route
        exact
        path="/"
        element={<ProductListPage />}
        handle={{
          crumb: () => <Link to="/">Home</Link>
        }}
      />
      <Route
        exact
        path="/products/:id"
        element={<ProductsDetailsPage />}
        handle={{
          crumb: () => (
            <>
              <Link to="/">Home</Link> / <Link>Product</Link>
            </>
          )
        }}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
)
