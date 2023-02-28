import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage, ProductPage } from "../pages";

const router = (
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path=":id" element={<ProductPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));
export default rootRouter;
