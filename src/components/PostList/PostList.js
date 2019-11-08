import React, { Component } from "react";

import Post from "../Post/Post";

import "./PostList.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Kalil Peixoto"
        },
        date: "04 Jun 2019",
        content: "Hey guys, does anybody knows if Rocketseat is hiring?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes"
            },
            content: "Of course, especially you who is a really good Architect"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara"
        },
        date: "05 Nov 2019",
        content: "Is someone really good at React Native?",
        comments: [
          {
            id: 1,
            author: {
              name: "Marcos Silva"
            },
            content: "So so, still learning"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes"
            },
            content: "i´m actually an expert, if you need any help, just ask..."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Lud Peixoto"
        },
        date: "25 Oct 2019",
        content:
          "I´m loving this GoBarber project, learning so many technologies at the same time. Right?",
        comments: [
          {
            id: 1,
            author: {
              name: "Luc Besson"
            },
            content: "Yeahhh, Omnistack rules"
          },
          {
            id: 2,
            author: {
              name: "Boring person"
            },
            content: "Uff, ehhh, it´s not that great"
          },
          {
            id: 3,
            author: {
              name: "Uhu Uhu guy"
            },
            content: "Don´t you prefer Angular and all of it´s mandatory files?"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <>
        <div className="post-list">
          {this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </>
    );
  }
}

export default PostList;
