import logo from './logo.svg';
import Navbar from './components/js/Navbar';
import Home from './components/js/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/js/Login';
import AdminLogin from './components/js/AdminLogin';
import Chat from './components/js/Chat';
import OrderState from "./context/orderSatate"

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'home',
    element: <Home/>
  },
  {
    path:'/adminLogin',
    element: <AdminLogin/>
  },
  {
    path:'/chat',
    element: <Chat/>
  }
])

function App() {
  return (
    <>
    <OrderState>
      <RouterProvider router={router}/>
    </OrderState>
  </>
  );
}

export default App;
