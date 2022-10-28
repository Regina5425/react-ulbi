import Login from "../components/Login";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";


export const privateRoutes = [
	{path: '/about', element: <About/>},
	{path: '/posts', element: <Posts/>},
	{path: '/posts/:id', element: <PostIdPage/>}
];

export const publicRoutes = [
	{path: '/login', element: <Login/>},
];