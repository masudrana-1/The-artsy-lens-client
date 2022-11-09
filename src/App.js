import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import AllReviews from './components/AllReviews/AllReviews';
import AllServices from './components/AllServices/AllServices';
import Blogs from './components/Blogs/Blogs';
import DetailsAndReview from './components/DetailsAndReview/DetailsAndReview';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import Services from './components/Services/Services';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: '/allservices',
          element: <AllServices></AllServices>,
          loader: () => fetch('http://localhost:5000/allservices')
        },
        {
          path: '/details/:id',
          element: <DetailsAndReview></DetailsAndReview>,
          loader: ({ params }) => fetch(`http://localhost:5000/allservices/${params.id}`)
        },
        {
          path: '/allreview',
          element: <AllReviews></AllReviews>,
          // loader: () => fetch('http://localhost:5000/reviews')
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
