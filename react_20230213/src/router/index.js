import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout";
import { HomePage, BlogPage, BlogDetailPage, AboutPage } from "../pages";

//MEMO: /blog/123

//MEMO: Next.js
const router = (
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="blog" element={<Layout />}>
      <Route index element={<BlogPage />} />
      <Route path=":id" element={<BlogDetailPage />} />
    </Route>
    <Route path="about" element={<AboutPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
