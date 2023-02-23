import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  console.log({ postId });
  return (
    <section style={{ padding: "20px" }}>
      <h1>Post Detail Page</h1>
    </section>
  );
};

export default PostDetail;
