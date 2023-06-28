import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2> 
      <p>{post.summary}</p>
      <img src={`http://localhost:4000/${post.cover}`} alt="" />
      <div>{post.content}</div>
    </div>
  );
}
