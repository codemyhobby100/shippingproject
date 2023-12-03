import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx';
import { createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import SignUp from './Components/Siignup/SignUp.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },

  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/dashboardpage",
    element: <DashboardPage/>
  }
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

