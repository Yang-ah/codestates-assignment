import React from "react";
import { useParams } from "react-router-dom";

const Item = ({
  title,
  description,
  onClickUpdate,
  onClickDelete,
  children,
}) => {
  return (
    <li>
      <div onClick={onClickUpdate}></div>
      <div onClick={onClickDelete}></div>
      <h2>{title}</h2>
      {children}
      {description && <p>{description}</p>}
    </li>
  );
};

const PostDetail = () => {
  const { postId } = useParams();
  const onClickDelete = () => {};

  return (
    <section style={{ padding: "20px" }}>
      <h1>Post Detail Page</h1>
      <Item title={"닉네임님이 남긴 평균 평점"} onClickDelete={onClickDelete}>
        <h1>hihihi</h1>
      </Item>
      <Item onClickDelete={onClickDelete}>
        <h1>hihihi</h1>
      </Item>
      <Item>
        <h1>hihihi</h1>
      </Item>
    </section>
  );
};

export default PostDetail;

const ChildComment = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

const Comment = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};
