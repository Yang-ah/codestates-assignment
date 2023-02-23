import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PostLayout, Layout } from "../components/Layout";
import { AuthPage, HomePage, PostDetailPage, PostsPage } from "../pages";

//MEMO: 1) :id 와 같이 path variable을 사용한 route
//MEMO: 2) 중첩 routing

const route = (
  <Route path="/" element={<Layout />}>
    {/* 인덱스 페이지 */}
    <Route index element={<HomePage />} />
    {/* 게시글 페이지 */}
    {/* /posts로 시작하는 요청이 들어오면, PostLayout을 먼저 거치고 난 다음에 자식 중에 일치하는 경로가 있는지 확인 */}
    <Route path="posts" element={<PostLayout />}>
      {/* posts 경로로 시작하는데, index page => /posts */}
      <Route index element={<PostsPage />} />
      {/*  posts/:postId */}
      {/*  게시글 상세페이지 */}
      <Route path=":postId" element={<PostDetailPage />} />
    </Route>
    {/* 게시글 상세페이지
    <Route path="posts/:postId" element={<PostDetailPage />} /> */}
    {/* 로그인/회원가입페이지 */}
    <Route path="auth" element={<AuthPage />} />
  </Route>
);

/**
 * createBrowserRouter
 * => router 정보를 기반으로 BrowserRouter로 감싸서 return
 * createRoutesFromElements
 * => Route태그로 감싸져있는 routing 정보들을 route 객체로 변환.
 *  */
const rootRouter = createBrowserRouter(createRoutesFromElements(route));
export default rootRouter;
