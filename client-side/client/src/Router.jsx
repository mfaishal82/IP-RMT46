import { createBrowserRouter, redirect } from "react-router-dom"
import Home from "./views/Home"
import Public from "./views/Public"
import Login from "./components/Login"
import ContentPage from "./components/ContentPage"
import Register from "./components/Register"

const router = createBrowserRouter(
    [

        {
            path: '/',
            element: <Home />
        },
        {
            path: '/pub',
            element: <Public />
        },
        {
            path: '/register',
            element: <Register />,
            loader: () => {
                return localStorage.getItem('access_token') ? redirect('/contents') : null
            }
        },
        {
            path: '/login',
            element: <Login />,
            loader: () => {
                return localStorage.getItem('access_token') ? redirect('/contents') : null
            }
        },
        {
            path: '/contents',
            element: <ContentPage />,
            loader: () => {
                return !localStorage.getItem('access_token') ? redirect('/login') : null
            }
        }
    ]
)

export default router