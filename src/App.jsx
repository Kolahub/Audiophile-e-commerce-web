// import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import HeadPhones from "./pages/HeadPhones"
import Speakers from "./pages/Speakers"
import EarPhone from "./pages/EarPhone"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <Home />},
      {path: 'headphones', element: <HeadPhones />},
      {path: 'speakers', element: <Speakers />},
      {path: 'earphones', element: <EarPhone />}
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App