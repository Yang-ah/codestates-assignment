import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthPage, HomePage } from "../pages";

//MEMO: 1) :id 와 같이 path variable을 사용한 route
//MEMO: 2) 중첩 routing

const route = (
  <Route path="/">
    <Route index element={<HomePage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(route));
export default rootRouter;
