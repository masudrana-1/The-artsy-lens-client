import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllServices from './components/AllServices/AllServices';
import Blogs from './components/Blogs/Blogs';
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
          element: <Services></Services>
        },
        {
          path: '/allservices',
          element: <AllServices></AllServices>
        },
        {
          path: '/servicedetails',
          element: <AllServices></AllServices>
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
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
