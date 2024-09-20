import Navbar from './components/home/Navbar'
import FlightLayout from './pages/FlightLayout'
import HomeLayout from './pages/HomeLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: '/flight',
        element: <FlightLayout />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
