import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout";
import { AboutPage, MyPage, TweetsPage } from "../pages";

const router = (
  <Route element={<Layout />}>
    <Route path="/" element={<TweetsPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/my" element={<MyPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));
export default rootRouter;
