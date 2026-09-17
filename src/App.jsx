import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout/Layout'
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>
    },
    {
      path:"Cart",
      element:<Cart/>
    },
    {
      path:"Favorite",
      element:<Favorite/>
    }

  ])

  return (
    <>
<RouterProvider router={router}/>
    </>
  )
}

export default App
