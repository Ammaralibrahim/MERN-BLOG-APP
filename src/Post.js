import {Link} from "react-router-dom"
export default function Post({_id,title,summary,cover,content}) {
  return (
    <div className="post">
      <div className="image">
       <Link to={`/post/${_id}`}>
       <img src={'http://localhost:4000/'+cover} alt=""/>
       </Link>
      </div>
      <div className="texts">
      <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
       </Link>

        <p className="info">
          <span className="author">Ammar Alibrahim </span>
          <time>2023-01-06 18:45:40</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
