import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllServices from './components/AllServices/AllServices';
import Blogs from './components/Blogs/Blogs';
import DetailsAndReview from './components/DetailsAndReview/DetailsAndReview';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
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
    <div className='mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
