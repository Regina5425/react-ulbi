import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from '../context/index';
import Posts from "../pages/Posts";
import { publicRoutes, privateRoutes } from "../router/Routes";
import Login from "./Login";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading} = useContext(AuthContext);

	if(isLoading) {
		return <Loader/>
	}

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
      <Route path='/*' element={<Posts to='/posts' replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
      <Route path='/*' element={<Login to='/login' replace />} />
    </Routes>
  );
};

export default AppRouter;
