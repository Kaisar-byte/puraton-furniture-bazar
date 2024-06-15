import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import AuthProvider from './Provider/AuthProvider/AuthProvider'
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // </React.StrictMode>,
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </AuthProvider>
  </QueryClientProvider>

)
