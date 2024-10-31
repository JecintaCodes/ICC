import {createBrowserRouter} from "react-router-dom"
// import LandPage from "../pages/landingP/LandPage"
// import LandLayout from "../pages/landingP/LandLayout"
import Register from "../pages/auth/Register"
import SignIN from "../pages/auth/SignIn"
import ForgetPassword from "../pages/auth/ForgetPassword"
import ResetPassword from "../pages/auth/ResetPassword"
import HomePage from "../pages/screen/HomePage"
import Layout from "../components/common/Layout"
import GalleryPage from "../pages/screen/GalleryPage"
import GalleryLayout from "../components/common/GalleryLayout"
import Blog from "../pages/screen/Blog"
import AboutUs from "../pages/screen/AboutUs"
import Events from "../pages/screen/Events"
import Community from "../pages/social/Community"
import BlogLayout from "../components/common/BlogLayout"
import EventLayout from "../components/common/EventLayout"
import AboutUsLayout from "../components/common/AboutUsLayout"
import LandingLayout from "../pages/landing/LandingLayout"
import LandingPage from "../pages/landing/LandingPage"
import EventDetailVideo from "../pages/screen/EventDetailVideo"
import AdminRegister from "../pages/auth/AminRegister"
import AdminSignIn from "../pages/auth/AdminSignIn"
import AdminForgetPassword from "../pages/auth/AdminForgetPassword"
import AdminResetPassword from "../pages/auth/AdminRessetPassword"
import RegisterPage from "../pages/auth/RegisterPage"
import AdminLayout from "../components/common/AdminLayout"
import DashBoard from "../pages/admin/DashBoard"
import AllUsers from "../pages/admin/AllUsers"
import AboutUsCreate from "../pages/admin/AboutUsCreate"
import UserRegister from "../pages/auth/UserRegister"
import UserSignIn from "../pages/auth/UserSignIn"
import UserForgetPassword from "../pages/auth/UserForgetPassword"
import UserResetPassword from "../pages/auth/UserRessetPassword"
import EmailToken from "../pages/auth/EmailToken"
import UserEmailToken from "../pages/auth/UserEmailToken"
import AdminEmailToken from "../pages/auth/AdminEmailToken"
import AllMembers from "../pages/admin/AllMembers"
import Home from "../practice/Home"

export const mainRoute = createBrowserRouter([
    {
        path:"/landing-page",
        element:<LandingLayout/>,
        children:[
            {
                index:true,
                element:<LandingPage/>
            }
        ]
    },
    // {
    //     path:"/landing-p",
    //     element:<LandLayout/>,
    //     children:[
    //         {
    //             index:true,
    //             element:<LandPage/>
    //         }
    //     ]
    // },

    {
        path:"/admin",
        element:<AdminLayout/>,
        children:[
            {
            index:true,
            element:<DashBoard/>,
        },
// ]},
        // {
        //     path:"/all-users",
        //     element:<AllUsers/>,
        // },
        // {
        //     path:"/all-members",
        //     element:<AllMembers/>,
        // },
        // {
        //     path:"/create-about-us",
        //     element:<AboutUsCreate/>,
        // },
        // {
        //     path:"/dashbord",
        //     element:<DashBoard/>,
        // },
    ],
    },
   
    
    {
        path:"/register-page",
        element:<RegisterPage/>,
    },
    {
        path:"/register",
        element:<Register/>,
    },

    {
        path:"/sign-in",
        element:<SignIN/>,
    },
    {
        path:"/forget-password",
        element:<ForgetPassword/>,
    },
    {
        path:"/reset-password",
        element:<ResetPassword/>,
    },
    {
        path:"/admin-register",
        element:<AdminRegister/>,
    },
    {
        path:"/admin-sign-in",
        element:<AdminSignIn/>,
    },
    {
        path:"/admin-forget-password",
        element:<AdminForgetPassword/>,
    },
    {
        path:"/admin-resset-password",
        element:<AdminResetPassword/>,
    },
    {
        path:"/register-user",
        element:<UserRegister/>,
    },
    {
        path:"/sign-in-user",
        element:<UserSignIn/>,
    },
    {
        path:"/forget-password-user",
        element:<UserForgetPassword/>,
    },
    {
        path:"/resset-password-user",
        element:<UserResetPassword/>,
    },
    {
        path:"/email-token",
        element:<EmailToken/>,
    },
    {
        path:"/email-token-user",
        element:<UserEmailToken/>,
    },
    {
        path:"/email-token-admin",
        element:<AdminEmailToken/>,
    },
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index: true,
                element:<HomePage/>
            }
        ]
    },
    {
        path:"/gallery",
        element:<GalleryLayout/>,
        children:[
            {
                index: true,
                element:<GalleryPage/>
            }
        ]
    },

    {
        path:"/blog",
        element:<BlogLayout/>,
        children:[
            {
                index:true,
                element:<Blog/>
            },
        ]
    },
    {
        path:"/event",
        element:<EventLayout/>,
        children:[
            {
                index:true,
                element:<Events/>
            },
        ]
    },
    // {
    //     path:"/event-detail-image",
    //     element:<EventDetailPageImage/>,
    // },
    {
        path:"/event-detail-video",
        element:<EventDetailVideo/>,
    },
    {
        path:"/about-us",
        element:<AboutUsLayout/>,
        children:[
            {
                index:true,
                element:<AboutUs/>
            }
        ]
    },
    {
        path:"/community",
        element:<Community/>,
    },

 ])