import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import Comment from "../Comment/Comment";

import imageDefault from "../../assets/ficheiro_ainda_nao_liberado.png";

import "./Post.css";

function Header({ post }) {
  const { id, author, date } = post;
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(`https://randomuser.me/api/?id=${id}"`);
      setThumbnail(resp.data.results[0].picture.thumbnail);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="post-header">
        <img
          className="avatar"
          src={thumbnail ? thumbnail : imageDefault}
        ></img>
        <div className="details">
          <span>{author.name}</span>
          <span>{date}</span>
        </div>
      </div>
    </>
  );
}

function Post({ post }) {
  return (
    <>
      <div className="post">
        <Header post={post} />
        <p className="post-content">{post.content}</p>
        {post.comments &&
          post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    </>
  );
}

export default Post;
