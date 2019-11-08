import React, { useState, useEffect } from "react";
import axios from "axios";
import imageDefault from "../../assets/ficheiro_ainda_nao_liberado.png";

import "./Comment.css";

function Comment({ comment }) {
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(
        `https://randomuser.me/api/?id=${comment.id}"`
      );
      setThumbnail(resp.data.results[0].picture.thumbnail);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="post-comments">
        <div className="divider">
          <div className="comment">
            <img
              className="avatar"
              src={thumbnail ? thumbnail : imageDefault}
            ></img>
            <p>
              <span>{comment.author.name}: </span>
              {comment.content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
