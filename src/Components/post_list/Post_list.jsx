import Post from "../post/Post";
import styled from "./list.module.css";

function Post_list() {
  let postContent = [
    {
      id: 1,
      cover: "",
      title: "Post 1",
      content: "This is the content of Post 1",
      author: "John Doe",
      readingTime: "5 minutes",
    },
    {
      id: 2,
      cover: "",
      title: "Post 2",
      content: "This is the content of Post 2",
      author: "Jane Doe",
      readingTime: "3 minutes",
    },
    {
      id: 3,
      cover: "",
      title: "Post 3",
      content: "This is the content of Post 3",
      author: "Alice Smith",
      readingTime: "7 minutes",
    },
    {
      id: 4,
      cover: "",
      title: "Post 4",
      content: "This is the content of Post 4",
      author: "Bob Johnson",
      readingTime: "4 minutes",
    },
    {
      id: 5,
      cover: "",
      title: "Post 5",
      content: "This is the content of Post 5",
      author: "Emily Davis",
      readingTime: "2 minutes",
    },
    {
      id: 6,
      cover: "",
      title: "Post 6",
      content: "This is the content of Post 6",
      author: "Charlie Wilson",
      readingTime: "6 minutes",
    },
    {
      id: 7,
      cover: "",
      title: "Post 7",
      content: "This is the content of Post 7",
      author: "David Brown",
      readingTime: "1 minute",
    },
    {
      id: 8,
      cover: "",
      title: "Post 8",
      content: "This is the content of Post 8",
      author: "Eric Taylor",
      readingTime: "9 minutes",
    },
  ];

  return (
    <div className="container">
      <div className={styled.postList}>
        <div>
          <h2>Post lists</h2>
        </div>
        <div className={styled.list}>
          {postContent.map((result) => (
            <Post content="result"/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post_list;
