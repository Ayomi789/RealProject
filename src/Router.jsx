import {createBrowserRouter} from "react-router-dom";
import DashBoardLayout from "./Layout/DashBoardLayout";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import User from "./Pages/User";


const router= createBrowserRouter([
    {
        path:"/",
        element: <DashBoardLayout/>,
        children:[
            {
                index: true,
                element : <Home/>
            },

            {
                path: "/settings",
                element: <Settings/>
            
            },

            {
                path: "/user",
                element: <User/>
            }
        ]
    }
])

export default router;