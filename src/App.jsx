import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()
import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import Headphones from './pages/Headphones/Headphones'
import Speakers from './pages/Speakers/Speakers'
import Earphones from './pages/Earphones/Earphones'
import ProductEdit from './pages/ProductEdit/ProductEdit'
import Checkout from './pages/Checkout/Checkout'
import Error from './pages/Error/Error'
Earphones
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/headphones',
        element: <Headphones />,
        errorElement: <Error />,
      },
      {
        path: '/speakers',
        element: <Speakers />,
        errorElement: <Error />,
      },
      {
        path: '/earphones',
        element: <Earphones />,
        errorElement: <Error />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
        errorElement: <Error />,
      },
      {
        path: 'product-edit',
        errorElement: <Error />,
        children: [
          {
            path: ':id',
            // action: noteAction,
            element: <ProductEdit />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
])
function App() {
  const [length, setLength] = useState()
  const [cart, setCart] = useState(false)
  return (
    <div className='App'>
      <AppContext.Provider value={{ length, setLength, cart, setCart }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
