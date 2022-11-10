import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import AllReviews from './components/AllReviews/AllReviews';
import AllServices from './components/AllServices/AllServices';
import Blogs from './components/Blogs/Blogs';
import DetailsAndReview from './components/DetailsAndReview/DetailsAndReview';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage></ErrorPage>,
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://the-artsy-lens-server-site.vercel.app/services')
        },
        {
          path: '/allservices',
          element: <AllServices></AllServices>,
          loader: () => fetch('https://the-artsy-lens-server-site.vercel.app/allservices')
        },
        {
          path: '/details/:id',
          element: <DetailsAndReview></DetailsAndReview>,
          loader: ({ params }) => fetch(`https://the-artsy-lens-server-site.vercel.app/allservices/${params.id}`)
        },
        {
          path: '/allreview',
          element: <AllReviews></AllReviews>
        },
        {
          path: '/addservice',
          element: <AddService></AddService>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }

  ])

  return (
    <div className='mx-auto w-11/12'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
