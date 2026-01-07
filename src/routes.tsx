import { createBrowserRouter } from "react-router-dom";
import HappyNewYear from "./views/HappyNewYear";
import App from "./App";
import NotFoundView from "./views/NotFound";

const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFoundView />
    },
    {
        path: '/',
        element: <App />
    },
    {
        path: '/wishes/:id',
        element: <HappyNewYear />
    },
])

export default router;