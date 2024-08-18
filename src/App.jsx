// import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import HeadPhones, {Loader as headphonesLoader} from "./pages/HeadPhones"
import Speakers, {Loader as speakersLoader} from "./pages/Speakers"
import EarPhone, {Loader as earphonesLoader} from "./pages/EarPhone"
import HeadphonesDetail, {Loader as headphonesDetailLoader} from "./pages/HeadphonesDetail"
import SpeakersDetails, {Loader as speakersDetailLoader} from "./pages/SpeakersDetails"
import EarphonesDetails, {Loader as earphonesDetailLoader} from "./pages/EarphonesDetails"
import HeadphonesRoot from "./pages/HeadphonesRoot"
import SpeakersRoot from "./pages/SpeakersRoot"
import EarphonesRoot from "./pages/EarphonesRoot"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <Home />},
      {path: 'headphones', element: <HeadphonesRoot />, children:[
        {index: true, element: <HeadPhones />, loader: headphonesLoader},
        {path: ':headphoneId', id: 'headphones-detail', element: <HeadphonesDetail />, loader: headphonesDetailLoader},
      ]},
      {path: 'speakers', element: <SpeakersRoot />, children:[
        {index: true, element: <Speakers />, loader: speakersLoader},
        {path: ':speakerId', id: 'speakers-detail', element: <SpeakersDetails />, loader: speakersDetailLoader},
      ]},
      {path: 'earphones', element: <EarphonesRoot />, children:[
        {index: true, element: <EarPhone />, loader: earphonesLoader},
        {path: ':earphoneId', id: 'earphones-detail', element: <EarphonesDetails />, loader: earphonesDetailLoader},
      ]},
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App