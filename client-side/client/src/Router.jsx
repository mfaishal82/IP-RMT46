import { createBrowserRouter } from "react-router-dom"
import Home from "./views/Home"
import Public from "./views/Public"
import Login from "./components/Login"
import ContentPage from "./components/ContentPage"

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
            path: '/login',
            element: <Login />
        },
        {
            path: '/contents',
            element: <ContentPage />
        }
    ]
)

export default router