import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main";
import EducationPage from "../pages/Education";
import LayoutWrapper from "../layouts/layout";
import WorkPage from "../pages/Work";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutWrapper />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: '/work',
                element: <WorkPage />,
            },
            {
                path: '/education',
                element: <EducationPage />
            }
        ]
    },
])

export default router